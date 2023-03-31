import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService], // Dependency Injection: service를 Controller에 주입한다. Controller에서는 이 service를 상속함으로써 기능 함수들을 사용할 수 있게 된다.
})
export class MoviesModule {}
