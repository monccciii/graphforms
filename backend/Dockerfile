FROM golang:1.19.6-alpine3.17

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY . .

RUN go build -o /graphforms-backend

EXPOSE 80

CMD [ "/graphforms-backend" ]