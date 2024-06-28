$(document).ready(function(){
    // Click event handler for the button
    $("#fadebtn").click(function(){
        $('#myElement').fadeOut(2000)
    });
    $("#slidebtn").click(function(){
       $('#myElement').slideDown(2000)
    });
    $("#slideupbtn").click(function(){
        $('#myElement').slideUp(3000)
    });  
    $("#fadeinbtn").click(function(){
      
    $('#myElement').fadeIn(2000)
    });  
    
});
   