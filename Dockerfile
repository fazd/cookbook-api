FROM node
COPY . /server
WORKDIR /server
RUN rm -rf ./node_modules
RUN yarn install
EXPOSE 3000
ENTRYPOINT ["yarn", "dev"]