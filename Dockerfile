FROM node:19-slim AS CLIENT_BUILDER
RUN apt-get update
WORKDIR /something_client
COPY package.json yarn.lock
RUN yarn install --force
COPY . .
LABEL name="CLIENT" version="1.0"
EXPOSE 3000
CMD yarn dev || yarn install --force && yarn dev