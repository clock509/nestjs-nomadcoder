import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  // DTO: Data Transfor Object - 데이터 유효성 검증
  // 데이터 유효성이라 함은, 클라이언트가 전달한 데이터의 형식이 서버에서 처리하기에 올바른지 확인하는 것이다.
  // 대개 Request body/Query string/parameter 등을 entity로 정의한 모델의 properties들과 비교하는 식으로 검증을 진행한다.
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true }) // each: 요소 하나하나를 모두 검사한다.
  readonly genres: string[];
}
