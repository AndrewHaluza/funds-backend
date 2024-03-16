FROM node:20.10-alpine


WORKDIR /usr/src/app

ADD . /usr/src/app/

ENV NODE_ENV production
ENV PORT 1337

ARG SERVER_URL=http://localhost:1337
ENV SERVER_URL=${SERVER_URL}

RUN npm install

RUN npm run build

EXPOSE 1337

CMD node ./server.js -p 1337
