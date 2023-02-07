FROM node:19-slim
RUN apt-get update

WORKDIR /yarn_cache
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

WORKDIR /something_client
COPY . .
RUN chmod +x ./docker/entrypoint.sh
ENTRYPOINT exec ./docker/entrypoint.sh