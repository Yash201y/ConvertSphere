FROM node:20

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y libreoffice

RUN npm install

CMD ["npm", "run", "start"]