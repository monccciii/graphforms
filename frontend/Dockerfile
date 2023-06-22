FROM node:20-alpine3.17

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

RUN cp .env .env.local

COPY . .


RUN yarn build

EXPOSE 80

CMD cp /app/.env /app/.env.local && yarn start --port 80

