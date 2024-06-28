$(document).ready(function(){
 $("input[type='text']").val('jQuery');
 $(".common").html("<h1>Welcome</h1>");
 //$("input[type='checkbox']").attr("checked","checked");
 $("#fName").attr("placeholder","newuser");
 $("input[type='checkbox']").prop("checked",false);//While loading itself checkbox will be unchecked
 //css properties
$("a").css({"color":"white","background-color":"blue","font-weight":900});

})