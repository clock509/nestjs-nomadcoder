import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // 모든 controller는 Module로 모인다.
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 선언된 변수들만 처리하고, 그 외의 변수들은 버린다.
      forbidNonWhitelisted: true, // 클라이언트 요청에 DTO에 선언된 변수들 외의 다른 것들이 있다면, 요청 자체를 막아버림.
      transform: true, // 클라이언트 요청의 파라미터를 DTO에 선언된 자료형으로 변형해 준다(ex. url 파라미터는 늘 string이지만, id는 대개 숫자이므로 형변환을 해 줘야 한다.)
    }),
  ); // enable global validation pipe with DTO
  await app.listen(3000);
}
bootstrap();
