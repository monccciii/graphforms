FROM node:14.21.2-alpine3.16

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn 

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 80

CMD ["yarn", "start", "--port", "80"]
