const fs = require('fs');

fs.readFile(__dirname + '/createDatabase.sql', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    processFile(data);
});     

function processFile(content) {
    console.log(content);
}