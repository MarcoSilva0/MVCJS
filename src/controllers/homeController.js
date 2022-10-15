exports.paginaInicial = (req, res ) => {
    req.session.usuario = {
        nome: 'Marco',
        logado: true
    }
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send('Olá ' + req.body.nome + ' ' + req.body.sobrenome);
};