FROM node:14.21.2-alpine3.16

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn 

COPY . .

EXPOSE 80

RUN yarn build:start
