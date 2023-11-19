FROM node:20-alpine

ARG HTTP_PORT=3000

WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm ci

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE $HTTP_PORT

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
