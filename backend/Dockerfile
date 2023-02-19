FROM golang:1.19.6-alpine3.17

WORKDIR /app

RUN echo "MONGODB_URI=${DB_URI}" > .env

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . .


RUN go build -o app .

EXPOSE 8080

CMD ["./app"]
