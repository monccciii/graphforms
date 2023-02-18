FROM node:14.21.2-alpine3.16

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

RUN docker stop $(docker ps -aq) && docker rm $(docker ps -aq)

RUN docker rmi $(docker images -aq)

CMD ["yarn", "start"]
