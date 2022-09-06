const express = require('express')
const routes = require('./routes')
const port = 3000

const app = express()

routes(app)

app.listen(port, () => {
  console.log('Servidor no ar ')
})

module.exports = app

///npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string

//npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string

//npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly

//npx sequelize-cli model:create --name Matriculas --attributes status:string

//npx sequelize-cli db:migrate

//npx sequelize-cli seed:generate --name demo-pessoa

//npx sequelize-cli db:seed:all

//npx sequelize-cli db:migrate

//mysql -u root -p 

// npm outdated

//5/07 aula