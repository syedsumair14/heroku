const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    var now = new Date().toString();
    var log = `${now}: ${req.method}: ${req.url}`;
    console.log(log);
    next();
});

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');      
});

app.get('/user-form', (req, res) => {
    res.sendFile(__dirname + '/public/login-form.html');
});

app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/public/success.html')
});

app.post('/login', (req, res) => {
    // console.log(req.body);
    if(req.body.uname == "admin" && req.body.passwd == "Root@123")
        res.redirect('/user-form');
    else
        res.redirect('/'); 
});

app.post('/validate', (req, res) => {
    console.log(req.body);

    res.redirect('/success');
});


app.listen(port, () => console.log(`Started server on port ${port}`));