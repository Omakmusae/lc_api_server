# lc_api_server

- 플러그인을 통해 기능 확장 가능
1. request 파라미터에 대한 유효성 검증은 표준화된 json 스키마를 통해서 가능 (commentSchema?)
2. async / await 을 통한 비동기 처리 가능

- 개발 환경
1. fastify : 프레임워크
2. typescript : ts 컴파일러를 포함하고 있어 ts를 js로 변환시켜줌 

- 플러그인
1. nodemon : 파일의 변경이 있으면 자동으로 감지해서 서버를 자동 재부팅해주는 모듈
2. ts-node : 개발환경에서 컴파일 없이 ts 상태로 프로젝트를 실행해주는 모듈
3. @type/node : ts로 node.js 어플리케이션을 작성할 때, 자동완성/타입힌트 등 타입 검사를 활용할 수 있도록 함


- Route : url 정보를 바탕으로 요청을 처리, 해당 라우터의 속성 (Get, Post, put, delete)을 정의
    - request는 (1) Body, (2) Querystring, (3) Params, (4) Headers  
    - reply는 (1) status, (2) send, (3) setCookie
    - 기능
        - JSON Schema : input과 output에 대해 유효성 검증을 쉽게 할 수 있음

- Hook : 요청에 따른 이벤트의 발생을 제어
    - preHandler
    - handler
- Plugin : 다양한 기능을 만들고 조립해서 사용하게 하는 기능



- Pure ESM package
    - https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

- 타입스크립트 module 에 따라 어떤 기능은 지원 안할 수 있음

--------------------------


- API 라우터, 인증 라우터 등록
    - route prefixing?
    - fastify-cli 플러그인? 
- Swagger 연동
- Prisma 4 적용

- 스키마 관련 참고 블로그
- https://velog.io/@velopert/veltrends-dev-review

- typebox 깃헙
- https://github.com/sinclairzx81/typebox