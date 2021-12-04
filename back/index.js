const express = require('express');
require('dotenv').config();
const router = require('./app/routers/router');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(router);






app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}`);
});