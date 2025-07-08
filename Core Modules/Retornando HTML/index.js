const http = require('http')
const port = 3000

const server = http.createServer((req, res)=>{
  res.statusCode = 200
  res.setHeader('Content-type', 'text/html')
  res.end('<h1>Olá, esse é o meu primeiro servidor com HTML!</h1>')
})

server.listen(port, ()=>{
  console.log(`servidor rodando na port ${port}`)
})