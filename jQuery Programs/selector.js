$(document).ready(function(){
/*Default value to the input type=text */
$("input[type='text']").val("Hello");

/* Appending Content Using html() and text() */ 
var a=$("#hid");
console.log(a);
a.text(a.text()+ " Welcome");

var b=$(".hid1");
console.log(b);
b.html(b.html()+" All");

/* Changing the attribute with input tag with id ATTR*/ 
$("#fname").attr("placeholder","username");


/*Changing the text color using CSS */
$(".hid1").css("color","red");
$("#hid").css({"background-color" :"blue","color":"yellow","font-style":"italic"});

//While loading itself checkbox will be unchecked
$("input[type='checkbox']").prop("checked",false);
$("#chk").prop("checked",true);

$("#rid").prop("checked",false);


})


