const app = require('express')();
const mongoose = require('mongoose');
const config = require('config');
const configDB = config.get('db');
const users = require('./routes/users');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Connect to mongodb
mongoose.connect(configDB, { useNewUrlParser: true })
    .then(_ => console.log('connected to mongo db'))
    .catch(err => console.log(err));

app.use('/api/user', users);

app.get('/', (req, res) => {
    res.send('Hello suckers!');
});


const PORT = process.env.NODE_ENV || 5000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));