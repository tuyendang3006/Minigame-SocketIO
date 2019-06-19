var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(process.env.PORT || 3000);

var array = [];

io.on("connection", function(socket){
    console.log("Someone connected: " + socket.id);

    socket.on("user-register", function(data){
        array.push(
            new User(data.name, data.email, data.telephone)
        );
        io.sockets.emit("server-send-list", array);
    });
});

function User(name, email, telephone){
    this.NAME = name;
    this.EMAIL = email;
    this.TELEPHONE = telephone;
}

app.get("/", function(req, res){
    res.render("acceuil");
});