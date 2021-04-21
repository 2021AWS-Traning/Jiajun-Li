
FROM node:alpine

WORKDIR /backend

COPY . .

RUN npm install && npx tsc

EXPOSE 5000

# the command that starts our app
CMD ["node", "dist/index.js"]
