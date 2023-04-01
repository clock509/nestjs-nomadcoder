## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Generate controller
```
$ nest generate controller
? What name would you like to use for the controller? movies   ## Type controller name after question as you want.
```

## Generate service
```
$ nest generate service
? What name would you like to use for the service? movies   ## Type service name after question as you want.
```

## Generate module
```
$ nest generate module
? What name would you like to use for the module? movies   ## Type module name after question as you want.
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Unit test
__Unit test는 모든 함수나 기능을 각각 따로 테스트하는 테스트를 의미한다. 서비스에서 분리된 유닛을 테스트하는 것이다.__
- NestJS는 JS 테스팅 프레임워크인 Jest를 기본적으로 설치한다.
- 또한 NestJS는 테스팅 관련 파일인 `~.spec.ts`로 끝나는 파일들을 자동으로 생성한다.
- Jest는 이 `spec.ts` 파일을 찾아서 테스트를 실행한다.
- `package.json`의 Jest 관련 명령어를 참조하여 유닛 테스트를 진행할 수 있다.
```
$ npm run test:cov   # test:watch
? What name would you like to use for the module? movies   ## Type module name after question as you want.
```

## E2E test
__E2E(End to end) test는 모든 시스템을 통합적으로 테스트하는 테스트를 의미한다.__
- 예를 들어, '이 페이지로 가면 특정 페이지가 나와야 한다'거나, '특정 링크를 누르면 이 페이지로 이동해야 한다'는 등의 사용자 스토리에 기반해 테스트하는 것은 E2E 테스트이다.
- E2E 테스트에 관한 파일들은 프로젝트 최상단에서 `./test` 폴더에 위치한다. 
- `package.json`의 Jest 관련 명령어를 참조하여 유닛 테스트를 진행할 수 있다.
```
$ npm run test:e2e
? What name would you like to use for the module? movies   ## Type module name after question as you want.
```
