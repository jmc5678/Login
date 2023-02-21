function validateForm() { 
    var user = document.getElementById("name").value; 
    var pass = document.getElementById("password").value; 
     if (user == "c" && pass == "1") {  
        alert("usuario y contraseña validos") ;
        window.location="CALCULADORA.html";
      } else { 
        alert("intenta de nuevo"); 
     } 
 };