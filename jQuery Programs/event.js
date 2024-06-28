$(document).ready(function(){
  $("#btn").click(function(){
         $("#hid").hide(2000);
                   
    })
    $("#btnid").click(function(){
        $("#hid").show(function(){
            
          alert("The <h1> element is now shown");
        })
                  
   })
   $("#btn1").click(function(){
      $("#hid").toggle(function(){

         //alert("The <h1> element is hide/show");
      })
                
 })

})