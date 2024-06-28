$(document).ready(function(){
    //Add a <h1> element using jQuery 
    var a=$("<h1>");
    console.log(a);
    
    $("body").append(a);
    a.html("Good Morning");
    //Remove a <p> element using remove()
    $("h3").remove();


    
    $("p").addClass("myclass");

})

