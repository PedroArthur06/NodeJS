const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ARQUIVO_DADOS = 'dados.txt';

const server = http.createServer(async (req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Erro ao carregar o formulário');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
    else if (req.method === 'POST' && req.url === '/salvar') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const dados = JSON.parse(body);

                const dadosFormatados = `Nome: ${dados.nome}, Email: ${dados.email}\n`;
                
                fs.appendFile(ARQUIVO_DADOS, dadosFormatados, (err) => {
                    if (err) {
                        res.writeHead(500, {'Content-Type': 'application/json'});
                        res.end(JSON.stringify({ 
                            success: false, 
                            message: 'Erro ao salvar os dados' 
                        }));
                    } else {
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.end(JSON.stringify({ 
                            success: true, 
                            message: 'Dados salvos com sucesso!' 
                        }));
                    }
                });
            } catch (error) {
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ 
                    success: false, 
                    message: 'Formato de dados inválido' 
                }));
            }
        });
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página não encontrada');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Os dados serão salvos em: ${ARQUIVO_DADOS}`);
});