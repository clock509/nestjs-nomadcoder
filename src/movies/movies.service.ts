import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable() // Dependency injection
export class MoviesService {
  private movies: Movie[] = []; // movie 엔티티를 상속하는 movies 배열

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Not found with movie id(${id})`); // Nestjs 기본 제공 예외 처리: statusCode, message, error를 함께 반환해 줌
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id); // getOne 결과가 문제 없으면 아래 코드가 진행된다.
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id); // getOne 결과가 문제 없으면 아래 코드가 진행된다.
    this.deleteOne(id); // 가짜 DB로 만드는 중이므로, id로 찾아 지운 후 배열에 수정 데이터를 추가하는 방식으로 시행
    this.movies.push({ ...movie, ...updateData });
  }
}
