FROM node:20.19.4

WORKDIR /usr/app/src

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]