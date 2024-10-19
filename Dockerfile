#  Dockerfile for React.js Frontend

FROM node:18.12.0

# Create App Directory
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm i

# Copy app source code
COPY . .

# Exports
EXPOSE 5173

CMD ["npm","start"]