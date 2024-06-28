function validateForm(){

    for(var i=0;i<myform.elements.length;i++){
        if(myform.elements[i].className=="req" && myform.elements[i].value.length ==0){
            alert("please fill all the required fields");
            break;
        }
    }
    
      var email = document.getElementById('email').value;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       var b=regex.test(email);
      if (!b) 
      {
       alert("Enter valid email address");
       
      }
      
      var phno=document.getElementById('phone').value;
      const regex1= "^[+]{1}(?:[0-9\\-\\(\\)\\/\\.]\\s?){6, 15}[0-9]{1}$";
      var p=regex1.test(phno);
      if(!p)
      {
        alert("Enter valid phone number");
      }
 
}