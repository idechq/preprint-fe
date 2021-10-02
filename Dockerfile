# Dockerization following example from:
# https://mherman.org/blog/dockerizing-a-react-app/
# https://github.com/nodejs/docker-node/issues/740#issuecomment-538644464

# Pull official base image
FROM node:16-alpine3.14

# Transfer permission to user "node" before doing any installation
RUN mkdir -p /app
RUN chown node /app
USER node

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./

RUN npm install

# Add app
COPY --chown=node:node . ./

# Start app
CMD ["npm", "start"]