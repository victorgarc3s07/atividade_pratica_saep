//------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const { error } = require('console');
const { hostname } = require('os');
//
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

//
const connectionDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '07112001',
    database: 'troca_tudo_SAEP'
});

connectionDb.connect((err) => {
    console.log('Conectando ao banco...');
    if(err) {
        console.error('ERRO NA CONEXÃO:', err);
    }
    console.log(`SUCESSO! Conectado ao banco de dados: ${connectionDb.config.database}`);
})

//---------Subindo servidor remoto----------
const PORT = 5500;
const localhost = 'http://localhost:' + PORT;
app.listen(PORT, (req, res) => {
    console.log(`SERVIDOR ONLINE: ${localhost}`);
});







