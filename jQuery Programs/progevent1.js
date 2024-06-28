$(document).ready(function(){
    $("div").addClass("class1");
    var colors=["red","green","blue","purple","yellow","orange","crimson","darkblue","grey","lightgreen"];
$("#btn").click(function(){
    console.log(Math.random());
    var randomColor=colors[Math.floor(Math.random() * colors.length)]; //here MAth.random will generate randon floaing point number since colors ia an array we need an integer value for that we are using math.floor()
    
    $("div").css({"background-color":randomColor});
   
})

})