FROM node AS builder

WORKDIR /run/app/download-pdf

COPY package.json ./

RUN npm i

FROM node
ARG dev=
WORKDIR /run/app/download-pdf

COPY --from=builder /run/app/download-pdf/node_modules ./node_modules

COPY ./src ./src

RUN npm i -g nodemon

CMD ["nodemon", "src/server.js"]