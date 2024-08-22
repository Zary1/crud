function routes(app){
    app.use('/utentes',require('./utentes.js'))

}

exports.module=routes()