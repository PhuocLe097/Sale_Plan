# pull the base image
FROM node:18.17.1-alpine
# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory /app in the container
COPY package*.json ./

RUN npm install -g serve
# RUN serve -s build
# Install the application dependencies inside the container
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle the app source inside the container
COPY . .

# TypeScript Compilation
RUN npm run build-docker

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the Docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD [ "npm", "run" "build-start" ]
# ENTRYPOINT ["npm", "run", "build-start"]