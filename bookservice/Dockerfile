FROM node:16-alpine
COPY ./bookservice/ .
RUN yarn install

CMD [ "yarn", "start" ]

EXPOSE 8083