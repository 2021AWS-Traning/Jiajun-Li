
FROM node:alpine

WORKDIR /frontend

COPY . .

RUN npm install && npx tsc

EXPOSE 4000

# the command that starts our app
CMD ["node", "dist/index.js"]
