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
