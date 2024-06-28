
$(document).ready(function(){
    var left_value=0;
    var top_value=0
$(document).keydown(function(e)//This code attaches an event listener to the keydown event of the entire document.
{
    var action=e.key;
    console.log(action);
    if(action=='ArrowLeft'){
        left_value=left_value-10;
        console.log(left_value);
        $("#dora").css('left',left_value); /*These lines use jQuery to update the CSS properties of the "dora" element. 
                                            They adjust the left and top properties to move the element horizontally and vertically
                                            based on the values of left_value and top_value.*/
    }
    else if(action=='ArrowRight'){
        left_value=left_value+10;
        console.log(left_value);
        $("#dora").css('left',left_value);
    }
    else if(action=='ArrowUp'){
        top_value=top_value-10;
        console.log(top_value);
        $("#dora").css('top',top_value);
    }
    else if(action=='ArrowDown'){
        top_value=top_value+10;
        console.log(top_value);
        $("#dora").css('top',top_value);
    }
});
})