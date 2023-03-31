import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// decorator: 클래스에 함수 기능을 추가한다.
@Module({
  imports: [],
  controllers: [MoviesController], // controller: url을 가져오고, 적절한 기능 함수 매핑하여 실행하는 역할(router)
  providers: [MoviesService],
})
export class AppModule {}
