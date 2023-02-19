FROM node:14.21.2-alpine3.16

ARG API_URL

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN echo "NEXT_PUBLIC_API_URL=${API_URL}" > .env.local

RUN yarn build

CMD ["yarn", "start"]
