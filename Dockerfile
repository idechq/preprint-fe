# Dockerization following example from:
# https://mherman.org/blog/dockerizing-a-react-app/

# pull official base image
FROM node:16.3.0-alpine3.11

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# https://stackoverflow.com/a/66508369
RUN chown -R node.node /app

# start app
CMD ["npm", "start"]