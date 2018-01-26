FROM node:8.9.4-alpine

RUN apk update && apk add build-base postgresql-dev postgresql postgresql-client postgresql-contrib

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install -g

EXPOSE 1337

CMD node ./node_modules/sails/bin/sails.js lift
