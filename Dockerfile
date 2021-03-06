FROM node:alpine

# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Install app dependencies
COPY package.json ./
RUN yarn

# Copy app source code
COPY . ./

#Expose port and start application
EXPOSE 3333
CMD yarn dev
