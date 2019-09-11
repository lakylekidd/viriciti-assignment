# We are going to use alpine image
# because it is very simple, light weight
# and more secure "3.98MB"
FROM node:11-alpine

# This is the image build step
RUN mkdir -p /usr/src/app

# Set the default working directory
WORKDIR /usr/src/app

# Copy all files to the image
COPY . .

# Install the packages
RUN npm install

# Expose the port the API is running on
# to the outside world in order to
# receive requests
EXPOSE 4000

# This is the command the 
# container executes by default
# when you launch the built image
# Only one command is allowed per Dockerfile
# Override the command: 
# docker run $image $other_command
CMD ["npm", "run", "start"]

# By updating the CMD to "dev" instead of "start"
# we can achieve continuous development using docker!