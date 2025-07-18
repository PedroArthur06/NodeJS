const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const basePath = path.join(__dirname, 'templates');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
});

app.post('/user/save', (req, res) => {
  const name = req.body.name;   
  const email = req.body.email;
  console.log(`Usuário salvo: ${name}, email: ${email}`);
  res.sendFile(`${basePath}/userForm.html`);
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Buscando usuário pelo ID: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta: http://localhost:${port}`);
});