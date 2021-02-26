const express = require('express');
const app = express();

const cors = require('cors');

require('dotenv').config();

const routes = require('./routes');
const { sequelize } = require('./models');
sequelize.sync();

const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', routes);

app.listen(PORT, () => {
    console.log(PORT, '번 포트에서 대기중~')
});