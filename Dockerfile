FROM node:16.15.0

WORKDIR /sky-lark

COPY package.json ./

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install -g pnpm

RUN pnpm i

RUN pnpm run build

COPY ./.output /sky-lark/.output

EXPOSE 3000

ENTRYPOINT [ "pnpm", "run", "start" ]
