FROM node:14.21.2-alpine3.16

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn 

COPY . .

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

EXPOSE 80

RUN yarn build2

CMD ["yarn", "start", "--port", "80"]
