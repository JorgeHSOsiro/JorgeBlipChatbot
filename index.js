const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { showData } = require('./controller/repositoryController')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', showData);

app.listen(PORT, ()=> console.log(`Conectado em ${PORT}`));
