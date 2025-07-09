const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')

console.log("Projeto iniciado")

operation()

function operation(){
  inquirer
  .prompt([
    {
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer?',
    choices: ['Criar uma conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair'],
    },
  ]).then((ansewr) => {
    const action = ansewr['action']
    console.log(action)
  })
  .catch((err) => console.log(err))
}