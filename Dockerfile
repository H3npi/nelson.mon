FROM node:8.9.3-alpine

COPY . /usr/src/nelson.mon
WORKDIR /usr/src/nelson.mon

RUN npm install -g .

EXPOSE 3000
CMD ["/usr/local/bin/nelson.mon"]
