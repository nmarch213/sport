const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const winston = require('winston');

const app = express();

app.use(cors());

app.use(express.static(__dirname));

app.set('port', process.env.PORT || 3000);


app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(app.get('port'), function () {
  winston.info('SportCaster Server Live at:  ' +
    app.get('port') + '; press Ctrl-C to terminate.');
});
