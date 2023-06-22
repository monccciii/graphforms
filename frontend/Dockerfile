FROM node:20-alpine3.17

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

RUN chmod +x setup.sh
RUN ./setup.sh

COPY . .


RUN yarn build

EXPOSE 80

CMD ["yarn", "start", "--port", "80"]

