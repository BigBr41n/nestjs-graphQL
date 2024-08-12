FROM node:22-alpine3.19 AS builder

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build


FROM node:22-alpine3.19

RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

EXPOSE 3000

CMD ["pnpm", "run", "start:prod"]
