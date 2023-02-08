FROM node:19-slim AS deps
RUN apt-get update
WORKDIR /something_client
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
CMD yarn install --check-file --frozen-lockfile; yarn dev