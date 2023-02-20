FROM node:14.21.2-alpine3.16

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN yarn build

EXPOSE 80

CMD ["yarn", "start", "--port", "80"]

