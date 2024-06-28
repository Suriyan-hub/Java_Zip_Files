$(document).ready(function(){
    var a=$("#nameDisplay")
    //a.addClass("class1");
    var names=["Grace","Priya","Amal","Dilsha","Suriya","Seona","Vimal"];
$("#btn").click(function(){
    console.log(Math.random());
    var randomName=names[Math.floor(Math.random() * names.length)]; //here MAth.random will generate randon floaing point number since colors ia an array we need an integer value for that we are using math.floor()
    
    a.html(randomName).addClass("class1");
   
})

})