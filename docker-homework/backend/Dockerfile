
FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./


COPY . .
RUN npm install && npx tsc

EXPOSE 5000

# the command that starts our app
CMD ["node", "dist/index.js"]
