$(document).ready(function() {
 
    $("#frmlogin").validate({
        rules: {
            
            username:{
                required: true,
                minlength:  8,
                maxlength: 25
            },
            password:{
                required: true,
                minlength: 8,
                maxlength: 16
            }
        },
        errorPlacement: function(){
            return false;
        }
    });
    $('#btnLogin').click(function(){
        if($('#frmlogin').valid()){
            alert("Done");
        }else{
            var username = $('#username').val();
            console.log(username);
            if(username == ""){
                $('#message').text('Username must be not empty!');
                $('#message').attr("hidden",false);
            }
           if($('#password').val() == ""){
               $('#message').text('Password must be not empty!');
               $('#message').attr("hidden",false);
           }
        }
    })
});