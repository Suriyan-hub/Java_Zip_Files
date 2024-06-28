$(document).ready(function(){

    $("#btn").click(function(){
        var user=$("#user").val();
        var pass=$("#password").val();
        if(user=="")
        {
            alert("Enter Username");
        }
        else if(pass==""){
            alert("Enter Password");
        }
        else{
            alert("Successfull");
        }

    });
   
})

