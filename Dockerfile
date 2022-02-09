FROM node:16
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY src /app/src
RUN ls -a
RUN yarn install
EXPOSE 3000
CMD ["yarn", "dev"]