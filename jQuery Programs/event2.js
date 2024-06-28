/*$(document).ready(function(){
    $("#togglebtn").click(function(){
        $("#myid").toggle(function(){
            if($(this).is(":visible")){
                alert("Element is now visible");
            }
            else{
                alert("Element is now hidden");
            }

        });

    });
}); */


$(document).ready(function(){
    $("#togglebtn").click(function(){
        $("#myid").toggle();
        // var disval=$("#myid").css("display");
        // console.log(disval);
        if ($("#myid").css("display") !== "none") {
            alert("Element is now visible");
        } else {
            alert("Element is now hidden");
        }
    });
});
