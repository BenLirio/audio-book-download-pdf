FROM node AS builder

WORKDIR /run/app/download-pdf

COPY package.json ./

RUN npm i

FROM node

WORKDIR /run/app/download-pdf

COPY --from=builder /run/app/download-pdf/node_modules ./node_modules

COPY ./src ./src

CMD ["node", "src/server.js"]