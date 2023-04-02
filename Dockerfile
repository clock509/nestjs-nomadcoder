FROM node:19-alpine
WORKDIR ~/Documents/private/study/toy-project/hi-nest
COPY package.json .
RUN npm install
COPY . .
RUN npm run --script build
CMD npm start run