$(document).ready(function()
{
 $("#btn").click(function()
 {
    alert("Button Clicked")
 })
 $("#btn").mouseenter(function(){
   $("#btn").css({"background-color":"green"})

 })
 $("#btn").mouseleave(function(){
    $(this).css({"background-color":"white"})
 
  })

 $("#btn1").click(function(){
  $("#box").toggle(3000);
 // $('#box').fadeToggle(3000)
 })

 $("#hid").mouseover(function (){
    $(this).css({"color":"red", "background-color":"yellow"})
 })

 $("#hid").mouseleave(function (){
   $(this).css({"color":"black", "background-color":"white"})
})
 
})
