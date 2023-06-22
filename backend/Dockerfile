FROM golang:1.20.5-alpine3.18

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY . .

RUN go build -o /graphforms-backend

EXPOSE 80

CMD ["/graphforms-backend"]
