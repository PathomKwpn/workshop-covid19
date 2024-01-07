# FROM node:16

# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm","run","dev"]

FROM node

WORKDIR /usr/src/app

COPY ./package.json ./package.json

RUN npm i

EXPOSE 5173

CMD ["npm","run","dev"]