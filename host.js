const express = require('express');
const router = require('./main');
const app = express();
app.use(router);
app.listen(1337);