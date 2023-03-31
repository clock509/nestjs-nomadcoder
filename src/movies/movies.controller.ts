import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies') // router
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {} // MoviesService를 import하는 대신 constructor로 초기화함
  /*
  본래 url 파라미터는 각 controller에서 어떻게 타입을 정의하는가에 관계 없이 항상 문자열이다.
  따라서 문자열이 아닌 자료형으로 사용하고자 할 때는 필요 시 반드시 형변환을 해 줘야 했다.
  하지만 main.ts에서 사용하는 pipe에 transform을 true로 설정하여, 필요한 자료형으로 자동적으로 바뀌게 한다.
  */

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: number) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    // DTO를 사용하면 @Body 데코레이터를 생략해도 된다.
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.movieService.deleteOne(id); //`This will delete a movie with thd id: ${id}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.movieService.update(movieId, updateData);
  }
}
