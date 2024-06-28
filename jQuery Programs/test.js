$(document).ready(function(){
      var a=$("input[type='checkbox']");
      var b=$("<h1>");
      b.html("No of checkboxes:" + a.length)
     $("body").append(b);
})