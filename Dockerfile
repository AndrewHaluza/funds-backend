FROM node:20.10-alpine


WORKDIR /usr/src/app

ADD . /usr/src/app/

ENV NODE_ENV production
ENV PORT 80

ARG SERVER_URL=http://localhost:1337
ENV SERVER_URL=${SERVER_URL}

RUN npm install

RUN npm run build

EXPOSE 80

CMD node ./server.js -p 80
