//import transform from 'css-to-react-native';
const transform = require('css-to-react-native').default;
const RNC = require('react-native-css').default;
// import RNC from 'react-native-css';

// const convertedStyle = transform([
//     { "marginBottom": 20, "fontSize": 18, "textAlign": "center", "color": "#656656" }
// ]);
// const convertedReactStyle =
//     RNC`
//     student-name {	height: 21px;	width: 160px;	color: #354052;	font-family: "Proxima Nova";	font-size: 14px;	line-height: 21px;	text-align: center;}
// `

var express = require('express')

var cors = require('cors')
var bodyParser = require('body-parser');
var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});


app.post('/', function (request, response) {
    console.log(JSON.stringify(request.body.data));
    var css = request.body.data.replace('\t', '');
    console.log(css);
    const styles = RNC`
   ${css}
  `;
    response.send(styles);
});

app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000')
});
