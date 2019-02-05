FROM node:8
WORKDIR /app
# Create app directory
#COPY . /mnt/d/Documents/code/mongodb_crud
RUN git clone -b master https://github.com/ysytnik/node-mongo-docker-compose.git
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./app
RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
#COPY . .

# EXPOSE 8080
# CMD [ "npm", "start" ]
