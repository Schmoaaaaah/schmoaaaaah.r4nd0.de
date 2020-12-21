FROM node:15.4.0

ENV PORT 3001

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --save

# Bundle app source
COPY . .

RUN npm run build
EXPOSE 3001

CMD [ "npm", "start" ]