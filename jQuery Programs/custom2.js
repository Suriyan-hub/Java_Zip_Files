var x;

$(document).ready(function(){

    /* Key Events 
       ***********  */
    $("#texta").keydown(function(event){

        console.log("Keydown"+ event.code);
        $("p").html("Keydown "+event.key)
    });

  /*  $("#texta").keyup(function(event){
       // console.log("Keyup"+ event.key);
        $("p").html("Keyup "+event.key)
    });

    /*$("#texta").keyup(function(e){
        console.log(e.key);
    });*/

 /* Mouse Events
    ************   */

    $(document).mouseup(function(event){
        console.log("Mouse Up");
        $("p").html("Mouse Up"+"X:" +event.clientX+" "+"Y:"+event.clientY);
    });

   /*  $(document).mousedown(function(){
        console.log("Mouse Down");
    });*/
   
    // $(document).mousemove(function(e){
    //    // x=e;
    //     console.log(e.clientX,e.clientY);
    // });

    /* Which Key I Pressed
       ******************* */

    /* $("#texta").keypress(function(e){
        x=e;
        console.log(x.key);

    });*/

    /* $("#texta").keyup(function(e){
        //x=e;
        console.log(e.key);

    });*/

  /*  $("#texta").keydown(function(e){
        x=e;
        console.log(x);

    });*/

   /* $("#texta").keypress(function(e){
        x=e;
        alert(x.key);

    });*/
    
    //$( "div" ).css( "width", "300px" ).add( "p" ).css( "background-color", "blue" );
})