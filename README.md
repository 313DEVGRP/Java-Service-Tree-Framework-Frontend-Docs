1. `nvm` 설치
   1. [nvm-window 다운로드 링크](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12)
2. `node` 설치 및 활성화
   1. `nvm install $(Get-Content .nvmrc)`
   2. `nvm use $(Get-Content .nvmrc)`
3. `yarn` 설치
   1. `npm install -g yarn`
   2. `yarn` 버전 확인 `yarn -v`
   3. `4.3.1`이 출력되면 성공
4. `yarn install` 명령어로 필요 패키지 설치
5. `yarn dev` 명령어로 로컬 구동

yarn add multiselect-react-dropdown

COPY ./packages/frontend/web/dist ./dist
COPY ./packages/frontend/admin/dist ./admin

COPY ./packages/backend/server /app
COPY ./packages/frontend/web/dist /app/static
COPY ./packages/frontend/admin/dist /app/static/admin

아래 오류 시. 관리자 권한 파워쉘 실행
yarn : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\spear\AppData\Roaming\npm\yarn.ps1 파일을 로드할 수 없습니다.
get-help Set-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned
