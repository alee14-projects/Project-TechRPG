const express = require('express');
const http = require('http');
const app = express();
const port = 4000;

// Require Filesystem module
const fs = require("fs");

// Require the Obfuscator Module
const JavaScriptObfuscator = require('javascript-obfuscator');

// Read the file of your original JavaScript Code as text
fs.readFile('./src/js/main.js', "UTF-8", function(err, data) {
    if (err) {
        throw err;
    }

    // Obfuscate content of the JS file
    const obfuscationResult = JavaScriptObfuscator.obfuscate(data);

    // Write the obfuscated code into a new file
    fs.writeFile('./public/js/main.js', obfuscationResult.getObfuscatedCode() , function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});

app.use(express.static(__dirname + '/public'));

console.log(`Started the server in port ${port}`);
http.createServer(app).listen(port);