FROM node:19-slim AS CLIENT_BUILDER
RUN apt-get update
WORKDIR /something_client
COPY . .
RUN yarn
LABEL name="CLIENT" version="1.0"
EXPOSE 3000
CMD ["yarn", "dev"]