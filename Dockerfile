FROM node:8
RUN git clone https://github.com/ysytnik/node-mongo-docker-compose.git
WORKDIR /app
# Create app directory
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY . .
RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source


# EXPOSE 8080
CMD [ "npm", "start" ]
