FROM golang:1.19.6-alpine3.17

RUN apk add --update --no-cache python3 && apk add --update --no-cache make automake gcc g++ subversion python3-dev && \
    ln -sf python3 /usr/bin/python && \
    python3 -m ensurepip && \
    pip3 install --no-cache --upgrade pip setuptools

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY . .

RUN pip3 install --no-cache-dir -r requirements.txt

RUN go build -o /graphforms-backend

EXPOSE 80

CMD ["/graphforms-backend"]
