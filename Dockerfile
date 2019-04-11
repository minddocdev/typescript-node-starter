# ------------------------------------------------------
#                       Dockerfile
# ------------------------------------------------------
# image:    typescript-node-starter
# tag:      latest
# name:     minddocdev/typescript-node-starter
# repo:
# how-to:   docker build -t minddocdev/typescript-node-starter:latest .
# Requires: node:alpine
# authors:  development@minddoc.com
# ------------------------------------------------------

FROM node:11.13-alpine
LABEL maintainer="development@minddoc.com"

# Create app directory and install production dependencies
WORKDIR /usr/src/app
COPY tsconfig.json package.json package-lock.json ./
RUN npm install --only=production

# Copy src files (Use .dockerignore to exclude non essential)
COPY src/ ./src

# Set permissions for the node user
RUN chown -R node:node .
USER node

# Run ts-node with src/server.ts entry point
CMD ["npm", "start"]
