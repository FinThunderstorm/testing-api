FROM node:17-buster

RUN mkdir /api && chown node:node /api
USER node

WORKDIR /api


COPY package.json package-lock.json ./


RUN npm ci --include=dev

EXPOSE 3000

COPY . .

CMD ["npm","start"]