var http = require("http");
var fs = require("fs");
var PORT = 8080;
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    // Capture the url the request is made to
    var path = req.url;
    // When we visit different urls, read and respond with different files
    switch (path) {
        case "/note":
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.end(data);
            });
        
        default:
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.end(data);
            });
    }
}
const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = text => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(input.value)
    input.value = ''
})

data.forEach(item => {
    liMaker(item)
})

button.addEventListener('click', function () {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})
// Starts our server.
server.listen(PORT, function () {
    console.log("directory" + __dirname);
    console.log("Server is listening on PORT: " + PORT);
});