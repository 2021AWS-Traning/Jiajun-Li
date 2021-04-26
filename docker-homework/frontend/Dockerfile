
FROM node:alpine AS builder

WORKDIR /frontend

COPY . .

RUN npm install && npx tsc

FROM node:alpine

WORKDIR /frontend

COPY package.json ./

COPY --from=builder /frontend/dist ./dist

EXPOSE 4000

# the command that starts our app
CMD ["node", "dist/index.js"]
