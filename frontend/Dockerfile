FROM node:20-alpine3.17

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

RUN echo $NEXT_PUBLIC_API_URL


COPY . .


RUN yarn build

EXPOSE 80

CMD ["yarn", "start", "--port", "80"]

