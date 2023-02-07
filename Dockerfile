FROM node:19-slim AS deps
RUN apt-get update
WORKDIR /something_client
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN chmod +x ./docker/entrypoint.sh
ENTRYPOINT exec ./docker/entrypoint.sh