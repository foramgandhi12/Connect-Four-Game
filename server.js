// Dependencies
var express = require("express");
var http = require("http");
var path = require("path");
var socketIO = require("socket.io");
var port = process.env.PORT || 5000;
var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set("port", port);
app.use("/static", express.static(__dirname + "/static"));
// Routing
app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "index.html"));
});
// Starts the server.
server.listen(port, function () {
  console.log("Starting server on port 5000");
});

// Add the WebSocket handlers
var players = {};
var gameN = 0;
var games = {};
io.on("connection", function (socket) {

  socket.on("new player", function () {

  });

  socket.on("disconnect", () => {

  });

  socket.on("drop", function (x, num, player) {
  
  });
});

function enter(game, x, player) {
 
}


function draw(game, num) {
  
}

function update(game) {
 
}

function updateState(game, state, num) {

}

function checkWin(game, player) {
  let tab = game.table;
  for (i = 0; i < tab.length; i++) {
    for (j = 0; j < tab.length; j++) {
      if (i + 3 < tab.length)
        if (
          tab[i][j] == player &&
          tab[i + 1][j] == player &&
          tab[i + 2][j] == player &&
          tab[i + 3][j] == player
        )
          return true;
      if (j + 3 < tab.length)
        if (
          tab[i][j] == player &&
          tab[i][j + 1] == player &&
          tab[i][j + 2] == player &&
          tab[i][j + 3] == player
        )
          return true;
      if (i + 3 < tab.length && j + 3 < tab.length)
        if (
          tab[i][j] == player &&
          tab[i + 1][j + 1] == player &&
          tab[i + 2][j + 2] == player &&
          tab[i + 3][j + 3] == player
        )
          return true;
      if (i + 3 < tab.length && j - 3 - 1)
        if (
          tab[i][j] == player &&
          tab[i + 1][j - 1] == player &&
          tab[i + 2][j - 2] == player &&
          tab[i + 3][j - 3] == player
        )
          return true;
    }
  }
  return false;
}

function checkTie(game) {
  let tab = game.table;
  for (i = 0; i < tab.length - 4; i++) {
    for (j = 0; j < tab.length - 4; j++) {
      if (tab[i][j] == 0) return false;
    }
  }
  return true;
}

function resetGame(game) {
  game.table = [...Array(7)].map((e) => Array(7).fill(0));
}

function disconnectOther(game) {
  
}

function findGame(socket) {
  
}

function createGame(socket) {


}
