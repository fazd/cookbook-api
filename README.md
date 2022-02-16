# cookbook-api

This API is the solution for the SymTrain test.

The API has the following features:
- User can register
- Create, Update, Delete, Get own and all recipes.
- Login
- Authentication
- Error middlewares
- Protected Routes
- Persistent data

# Technologies
- NodeJs
- Typescript
- Express
- MySQL
- Sequelize
- Joi
- Jsonwebtoken
- bcrypt
- Git
- yarn

IMPORTANT NOTE: (it is not advised to keep the .env in the repo. however, we are keeping it in order to ease the testing)


# To run the project you need to:

`git clone https://github.com/fazd/cookbook-api.git`


# Instalation 
` docker-compose up --build `

# Initiate DB
To start the db and run the migrations you must:
- `docker-compose up -d`
and also run:
- `docker-compose exec cookbook yarn db:create`
- `docker-compose exec cookbook yarn db:migrate`


# To delete the Db

`docker-compose exec cookbook yarn db:drop`

# To run the code:

`docker-compose up `

