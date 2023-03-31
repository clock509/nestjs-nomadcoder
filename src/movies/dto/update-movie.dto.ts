import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// UpdateMovieDto는 CreateMovieDto와 기본 형태가 같지만, 부분적으로 수정을 할 수도 있기 때문에 일부 Properties는 null일 수도 있다.
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
