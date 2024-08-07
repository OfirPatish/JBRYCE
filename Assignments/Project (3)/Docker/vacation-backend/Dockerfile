# Use the specified Node.js version as the base image
# FROM node:18-alpine
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json file to the working directory
COPY package.json ./

# Install the dependencies listed in package.json
RUN npm install

# Install global dependencies
RUN npm install -g nodemon ts-node

# Copy the rest of the application files to the working directory
COPY . .

# Expose the application port
EXPOSE 8080

# Command to start the application using nodemon and ts-node
# CMD ["npx", "nodemon", "--exec", "ts-node", "server.ts"]
CMD ["nodemon", "--exec", "ts-node", "server.ts"]

# Building Docker -> docker build . -t library
# Running Docker -> docker run -d -p 8080:8080 library
