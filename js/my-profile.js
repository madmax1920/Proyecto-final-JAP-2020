var datos = {
    "Nombre": "",
    "Apellido": "",
    "Edad": "",
    "Email": "",
    "Telefono": ""
}
var tomoDatos = JSON.parse(localStorage.getItem("datos")); 
if (tomoDatos) {
    document.getElementById("nombre").value = tomoDatos.Nombre;
    document.getElementById("apellido").value = tomoDatos.Apellido;
    document.getElementById("edad").value = tomoDatos.Edad;
    document.getElementById("email").value = tomoDatos.Email;
    document.getElementById("telefono").value = tomoDatos.Telefono;
   
}

function guardarCambios() {
    datos.Nombre = document.getElementById("nombre").value;
    datos.Apellido = document.getElementById("apellido").value;
    datos.Edad = document.getElementById("edad").value;
    datos.Email = document.getElementById("email").value;
    datos.Telefono = document.getElementById("telefono").value;
    
    localStorage.setItem("datos", JSON.stringify(datos));
      
}


// LA IMAGEN NO APARECE SIN HACER REFRESH
document.querySelector("#fotoDePerfil").addEventListener("change",function(){

    var reader= new FileReader();

    reader.addEventListener("load",() => {
        localStorage.setItem("imagen-seleccionada",reader.result);

        
    });
    
    

    reader.readAsDataURL(this.files[0]);
     

});


document.addEventListener("DOMContentLoaded", () => {

    var muestroImg = localStorage.getItem("imagen-seleccionada");
    if (muestroImg){
        document.querySelector("#imgPreview").setAttribute("src", muestroImg);
      
    }

});
