const inquirer = require('inquirer').default;
const chalk = require('chalk').default;
const fs = require('fs');

console.log(chalk.blue("Projeto iniciado"));

operation();

function operation() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: chalk.yellow('O que você deseja fazer?'),
      choices: [
        'Criar uma conta',
        'Consultar saldo',
        'Depositar',
        'Sacar',
        'Sair'
      ],
    },
  ])
  .then((answer) => {
    const action = answer['action'];

    if (action === 'Criar uma conta') {
      createAccount();
    }else if (action === 'Consultar saldo'){

    }else if (action === 'Depositar'){

    }else if (action === 'Sacar'){

    }else{
      console.log(chalk.bgBlue.black('Obrigado por usar o Accounts !'))
      process.exit()
    }
  })
  .catch((err) => console.log(chalk.red(err)));
}

function createAccount() {
  console.log(chalk.green('Obrigado por escolher os nossos serviços!'));
  console.log(chalk.green('Defina as opções da sua conta a seguir'));
  
  buildAccount();
}

function buildAccount() {
  inquirer.prompt([
    {
      name: 'accountName',
      message: chalk.cyan('Insira um nome para a sua conta')
    }
  ])
  .then((answer) => {
    const accountName = answer['accountName'];
    console.info(chalk.magenta(`Nome da conta: ${accountName}`));

    if (!fs.existsSync('accounts')) {
      fs.mkdirSync('accounts');
    }

    if (fs.existsSync(`accounts/${accountName}.json`)) {
      console.log(chalk.red("Essa conta já existe, escolha outro nome"));
      buildAccount();
      return;
    }
    
    fs.writeFileSync(`accounts/${accountName}.json`, `{"balance": 0}`);
    console.log(chalk.green('Parabéns! Conta criada com sucesso'));
    operation();
  })
  .catch(err => console.log(chalk.red(err)));
}
