import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// decorator: 클래스에 함수 기능을 추가한다.
@Module({
  // 앱을 모듈별로 분리하기 때문에, AppModule의 controllers, providers는 직접 MoviesControllers, MoviesServices를 import하지 않는다.
  imports: [MoviesModule],
  controllers: [AppController], // controller: url을 가져오고, 적절한 기능 함수 매핑하여 실행하는 역할(router)
  providers: [],
})
export class AppModule {}
