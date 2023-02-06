FROM node:19-slim
RUN apt-get update
WORKDIR /something_client
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD yarn dev || yarn install && yarn dev