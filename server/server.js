const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());


// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '27c8859f7d8d4aa4a143dbb3eb14430d',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

//MIDDLEWARE

app.use(express.static(path.join(__dirname, "../public")));

//ENDPOINTS

app.post('../public', (req, res) => {
    try {
        notRealFunction();
    }catch (error) {
        rollbar.error("This is a fake function")
        console.error(error)
    }
});

app.get('../public/', (req, res) => {
    try {
        playFunction();
    } catch (error) {
        rollbar.critical("The page has failed to load")
    }
})

app.post('../public/', (req, res) => {
    try {
        rollbar.info("Menu link worked")
    } catch {
        rollbar.warning("Menu link doesn't work")
    }
})

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });
// app.get('/styles', function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/styles.cc"));
// });

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Disco happening in port ${port}`)
});