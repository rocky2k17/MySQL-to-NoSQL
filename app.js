var express     = require('express'),
    app         = express(),
    sql         = require('mssql'),
    mongoose    = require('mongoose');
    bodyParser  = require('body-parser');

var getData     = require('./sqlip');
    // nosql       = require('./nosql');
    // structure   = require('./output');

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/', async (req, res) => {
    // let structure = await getData.get_data(req,res);
    getData.get_data(req, res);
    // nosql.put_data(req, structure);
    // console.log(structure);
    // res.render('show', {data : strcutre})
})

app.listen(5000, () => {
    console.log('Server initiated!!');
})