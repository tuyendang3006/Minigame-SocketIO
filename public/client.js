var socket = io("http://localhost:3000");

socket.on("server-send-list", function(data){
    $("#list").html("");
    data.map(function(user, index){
        $("#list").append(`
        <div class='user'>
            <div class='lign1'>id:` + index + ` || <span>` + user.NAME + `</span></div>
            <div class='lign2'>` + user.EMAIL + ` - ` + user.TELEPHONE + ` </div>
            </div>
        `);
    });
});

$(document).ready(function(){
    $("#btnRegister").click(function(){
        socket.emit("user-register", 
            {
                name:$("#txtName").val(), 
                email:$("#txtEmail").val(), 
                telephone:$("#txtNumeroTelephone").val()
            });
    });
});