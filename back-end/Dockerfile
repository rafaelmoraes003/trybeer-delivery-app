FROM node:lts-alpine

WORKDIR /app-backend

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
