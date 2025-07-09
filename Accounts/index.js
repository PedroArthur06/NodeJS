const inquirer = require('inquirer').default;
const chalk = require('chalk')
const fs = require('fs')

console.log("Projeto iniciado")

operation()

function operation(){
  inquirer.prompt([
    {
    type: 'list',
    name: 'action',
    message: 'O que você deseja fazer?',
    choices: ['Criar uma conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair'],
    },
  ]).then((ansewr) => {
    const action = ansewr['action']
    if(action === 'Criar uma conta'){
      createAccount()
    }
  })
  .catch((err) => console.log(err))
}

function createAccount(){
  console.log(chalk.bgGreen.black('Obrigado por escolher os nossos serviços!'))
  console.log(chalk.green('Defina as opções da sua conta a seguir'))
}