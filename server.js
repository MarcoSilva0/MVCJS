require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('pronto');
    });


const routes = require('./routes');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

//Setando a pasta de arquivos estáticos CSS, IMG
app.use(express.static(path.resolve(__dirname, 'public')));

//Setando a engine e mostrando o caminho da pasta
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Setando o middleware global
app.use(middlewareGlobal);

app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Pronto, tudo está no seu devido lugar!')
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
} );