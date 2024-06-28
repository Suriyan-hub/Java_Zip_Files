$(document).ready(function(){

    // $( "#btn1" ).click(function() {
    //     $( "#box" ).animate({
    //      width: "300px",
    //      height: "300px", 
    //       }, 1500 );
    //   });
      
    //   $( "#btn2" ).click(function() {
    //     $( "#box" ).animate({
    //      width: "100px",
    //      height: "100px",    
    //       }, 1500 );
    //   });
         $("#box").mouseover(function(){
             $("#box").animate({
                 width: "200px",
                height: "200px", 
             }, 1500 );
        })
        $("#box").mouseleave(function(){
            $("#box").animate({
                width: "150px",
                height: "100px", 
                 }, 1500 );
            })
  })
      


