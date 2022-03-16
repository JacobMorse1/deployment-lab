const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

//MIDDLEWARE

// app.use(express.static(path.join(__dirname, "../public")));

//ENDPOINTS

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
app.get('/styles', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/styles.cc"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Disco happening in port ${port}`)
});