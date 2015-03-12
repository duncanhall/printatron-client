#################################
# PRINTATRON CLIENT
#################################

FROM dockerfile/nodejs

MAINTAINER Duncan Hall <himsel@duncanhall.net>

COPY app                /data/app
COPY ./server.js        /data/
COPY ./package.json     /data/

RUN sudo apt-get update && apt-get install -y libcups2-dev

RUN npm install

WORKDIR /data

EXPOSE 2015

CMD ["bash"]