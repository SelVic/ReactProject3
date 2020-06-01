let express = require('express');

let app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/styles', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
console.log('http://localhost:3000');