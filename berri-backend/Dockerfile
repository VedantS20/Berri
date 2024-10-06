# Use an official Node runtime as the parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Make port 8080 available outside the container
EXPOSE 8080

# Define the command to run the app
CMD ["node", "index.js"]