
FROM node:alpine AS builder

WORKDIR /backend

COPY . .

RUN npm install && npx tsc

FROM node:alpine

WORKDIR /backend

COPY package.json ./

COPY --from=builder /backend/dist ./dist

EXPOSE 5000

# the command that starts our app
CMD ["node", "dist/index.js"]
