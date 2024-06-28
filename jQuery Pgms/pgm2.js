$(document).ready(function(){
    $("#tid").keypress(function(event) {
        //console.log(event.key);
       if (event.key === "Enter") { // 13 is the key code for Enter
          var a = $("#tid").val();
          console.log(a);
          var b=$("<h1>");
          b.html(a);
          $("body").append(b);
       }
    });
   //  //change the button text
   //  $("#btn").prop("value","Save");
 });
 