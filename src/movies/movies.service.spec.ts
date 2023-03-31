import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import {NotFoundException} from "@nestjs/common";

describe('MoviesService', () => {
  let service: MoviesService;

  // 테스트를 하기 전 실행되는 beforeEach
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  /* 테스트 케이스를 작성하는 부분 */
  // it: 테스트 케이스 시작
  it('should be defined', () => {
    // expect(received): 테스트 행동
    // expect().~~~(expected): received에 대한 테스트 결과로 나와야 하는 값은 expected임을 정의한다.
    expect(service).toBeDefined();
  });

  it('4', () => {
    expect(2 + 3).toEqual(5);
  });

  describe('getAll()', () => {
    it('should return an Array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array); // getAll()의 리턴값이 배열인지 확인
    });
  });

  describe('getOne()', () => {
    it('should return a movie', () => {
      service.create({
        title: 'Test movie',
        genres: ['test'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined(); // Movie 엔티티인지 확인
      expect(movie.id).toEqual(1);
    });

    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Not found with movie id(999)`);
      }
    });

    describe('deleteOne()', () => {
      it('deletes a movie', () => {
        service.create({
          title: 'Test movie',
          genres: ['test'],
          year: 2000,
        });
        const allMovies = service.getAll().length;
        service.deleteOne(1);
        const afterDelete = service.getAll().length;
        expect(afterDelete).toEqual(allMovies - 1);
      });

      it('should return 404 error', () => {
        try {
          service.deleteOne(999);
        } catch (e) {
          expect(e).toBeInstanceOf(NotFoundException);
          expect(e.message).toEqual(`Not found with movie id(999)`);
        }
      });
    });

    describe('create', () => {
      it('should create a movie', () => {
        const beforeCreate = service.getAll().length;
        service.create({
          title: 'Test movie',
          genres: ['test'],
          year: 2000,
        });
        const afterCreate = service.getAll().length;
        expect(afterCreate).toBeGreaterThan(beforeCreate);
      });
    });

    describe('update', () => {
      it('should update a movie', () => {
        service.create({
          title: 'Test movie',
          genres: ['test'],
          year: 2000,
        });
        service.update(1, { title: 'Updated Test' });
        const movie = service.getOne(1);
        expect(movie.title).toEqual('Updated Test');
      });

      it('should throw a NotFoundException', () => {
        try {
          service.update(999, {});
        } catch (e) {
          expect(e).toBeInstanceOf(NotFoundException);
          // expect(e.message).toEqual(`Not found with movie id(999)`);
        }
      });
    });
  });
});
