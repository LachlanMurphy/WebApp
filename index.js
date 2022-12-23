let express = require('express');

let port = 3000;

let app = express();
let server = app.listen(port);

app.use(express.static('public'));

console.log("Server running on port " + port);

console.log("New shit on a different level again 20");