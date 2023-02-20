FROM node:14.21.2-alpine3.16

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

RUN echo "NEXT_PUBLIC_API_URL=http://graphforms-backend.eba-kdp2wjph.us-east-1.elasticbeanstalk.com/" > .env.local

COPY . .


RUN yarn build

EXPOSE 80

CMD ["yarn", "start", "--port", "80"]

