exports.paginaInicial = (req, res ) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send('Olá ' + req.body.nome + ' ' + req.body.sobrenome);
};