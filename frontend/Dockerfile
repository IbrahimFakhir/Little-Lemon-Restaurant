#
# Build stage
#
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

#
# Package stage
#
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/build/ /app/build/
# EXPOSE 5173
EXPOSE 3000
CMD ["npx", "http-server", "-p", "3000", "./build"]
