const express = require('express')
const routes = require('./routes')
const port = 3000

const app = express()

routes(app)

app.listen(port, () => {
  console.log('Servidor no ar ')
})

module.exports = app

///npx sequelize-cli model:create --name Pessoas --attributes nnome:string,ativo:boolean,email:string,role:string

//npx sequelize-cli db:migrate

//npx sequelize-cli seed:generate --name demo-pessoa

//npx sequelize-cli db:seed:all

//mysql -u root -p  

//5/02