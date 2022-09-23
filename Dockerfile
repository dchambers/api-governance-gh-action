FROM node:slim

COPY . .

RUN yarn install --immutable --immutable-cache

ENTRYPOINT ["node", "/dist/index.js"]
