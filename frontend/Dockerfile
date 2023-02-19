FROM node:14.21.2-alpine3.16

ARG API_URL

WORKDIR /app

RUN echo "NEXT_PUBLIC_API_URL=${API_URL}" > .env.local

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]
