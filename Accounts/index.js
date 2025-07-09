const inquirer = require('inquirer').default;
const chalk = require('chalk');
const fs = require('fs');

console.log("Projeto iniciado");

operation();

function operation() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'O que você deseja fazer?',
      choices: ['Criar uma conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair'],
    },
  ])
  .then((answer) => {
    const action = answer['action'];
    if (action === 'Criar uma conta') {
      createAccount();
    }
  })
  .catch((err) => console.log(err));
  }

function createAccount() {
  console.log('Obrigado por escolher os nossos serviços!');
  console.log('Defina as opções da sua conta a seguir');
  
  buildAccount()
}

function buildAccount(){
  inquirer.prompt([
    {
      name:'accountName',
      message: 'Insira um nome para a sua conta'
    }
  ])
  .then((answer) => {
    const accountName = answer['accountName']
    console.info(accountName)

    if(!fs.existsSync('accounts')){
      fs.mkdirSync('accounts')
    }

    if(!fs.existsSync(`accounts/${accountName}.json`)){
      console.log("Essa conta ja existe, escolha outro nome")
    buildAccount()
    return
    }
    
    fs.writeFileSync(`accounts/${accountName}.json`, `{"balance": 0}`,
      function(err){
        console.log(err)
      },
    )
    console.log('Parabéns! Conta criada com sucesso')
    operation()
  })
  .catch(err => console.log(err))
}


   