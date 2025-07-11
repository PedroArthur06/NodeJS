const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const basePath = path.join(__dirname, 'templates');

const checkAuth = function(req, res, next) {

  reqAuthStatus = false;

  if (reqAuthStatus) {
    console.log('Usuário autenticado!');
    next();
  } else {
    console.log('Você não tem permissão para acessar essa rota!');
    next();
  }
}
app.use(checkAuth);

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta: http://localhost:${port}`);
});