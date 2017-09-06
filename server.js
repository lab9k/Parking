const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static('site'))

const contract = require('./contract.js');

app.get('/', function (req, res) {
    //contract.isAdmin().then((value) => {
    //   if (value === true)
    res.sendFile("index.html", { root: __dirname + "/site/" })
    //   else
    //       res.send("not an admin");
    //  }).catch((error) => {
    //      res.send(error);
    //  })
    //TODO write AJAX function to get admin page content. (address from metamask) => {contract.isAdmin()}

});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
