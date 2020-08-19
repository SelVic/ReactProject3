let express = require('express');
let path = require('path');
let app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.use('/build', express.static(path.join(__dirname, 'build')));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

app.get(['/', '/user', "/movie/:id"], function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/error', function (req, res, next) {
    next('404040')
})
//
app.get ('/test', function (req,res, next) {
    return res.send(req.header('Pragma'))
    console.log(req.header('Content-type'))
})
app.get ('/test2', function (req,res, next) {
    res.set('Content-type', 'text-html')
    return res.send(req.header('Content-type'))
    console.log(req.header('Content-type'))
})
//
app.get('*', function (req, res, next) {
    console.log(`404 ${req.url}`)
    return res.sendStatus(404);
})

app.use(function(err, req, res, next){
    console.log("Ошибка", err)
    return res.sendStatus(503);
})


app.listen(3000);
console.log('http://localhost:3000');