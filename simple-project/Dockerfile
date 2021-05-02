FROM node:alpine
WORKDIR /simpleproject
COPY package.json /simpleproject
RUN npm install
COPY . /simpleproject
CMD ["npm","start"]