FROM node:20-alpine
WORKDIR /usr/src/app/rinaofk
COPY ./package.json ./
RUN npm install