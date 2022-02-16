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
` yarn `

# Initiate DB
IMPORTANT: you need to have installed and running the mysql daemon. 

`yarn db:create`
`yarn db:migrate`

# To delete the Db

`yarn db:drop`

# To run the code:

`yarn dev `

