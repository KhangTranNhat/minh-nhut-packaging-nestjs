FROM node:21-alpine AS development

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build