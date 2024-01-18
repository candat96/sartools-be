FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm

COPY . /app/

RUN npm run build

FROM node:16-alpine as deploy

COPY --from=build /app/package.json package.json

COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app/dist ./dist

COPY --from=build /app/public ./public

CMD [ "node", "dist/main.js" ]
