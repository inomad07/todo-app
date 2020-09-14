# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:12.18.0

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm i

# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
EXPOSE 3000

# Finally runs the application
CMD [ "npm", "start" ]

#MAINTAINER Damon <noneprado@gmail.com>
#
#ENV RUN_USER            root
#ENV RUN_GROUP           root
#ENV ADMIN_HOME  /usr/src/app
#
## Create app directory
#RUN mkdir -p                               "${ADMIN_HOME}" \
#    && chmod -R 700                        "${ADMIN_HOME}" \
#    && chown -R ${RUN_USER}:${RUN_GROUP}   "${ADMIN_HOME}"
#
## Bundle app source
#COPY . "${ADMIN_HOME}"
#
##RUN ls -la "${FG_ADMIN_HOME}"
#
#WORKDIR "${ADMIN_HOME}"
#
#RUN curl https://install.meteor.com/ | sh
#
## Install app dependencies
#RUN npm i
#
##TimeZone
#ENV TZ=Asia/Bishkek
#RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
#
#USER ${RUN_USER}:${RUN_GROUP}
#
#EXPOSE 8000
#
#VOLUME ["${ADMIN_HOME}"]
#
##Start admin on certain host and port
#CMD [ "npm", "start" ]
