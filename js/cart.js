var comissionPercentage = 0;
var articles = [];

//función para mostrar los elementos del carrito
function showCart(array) {
    let html = ``;

    if(array){
    for (i = 0; i < array.length; i++) {
        article = array[i];

        html += `
        
        <tr>
          <th scope="col"></th>
          <th scope="col">Articulos</th>
          <th scope="col">Precio unit</th>
          <th scope="col">Cantidad</th>
          <th scope="col">SubTotal</th>
        
        </tr>
        <th class="align-middle align-center" scope="row"><img style='max-height:7em;' src='${article.src}' alt='${article.src}' width="100" height="100" class="img-thumbnail"class="img-thumbnail"></th>
                
        <td class="align-middle">${article.name}</td>
                <td class="align-middle">
        <div>
                      <div class="def-number-input number-input btn-group ">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown(); showFinal(articles);"
                        class="redondo">-</redondo>
                          </button>
                          
                        <input class="quantity" min="1" name="inputcount[${i}]" value="${article.count}" type="number" id="inputcount${i}" style="width:3em; text-align:center" disabled>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp(); showFinal(articles);"
                          class="redondo">+</redondo>
                      </div>
                    </div>   
  </td>
  
  <td class="align-middle">${article.unitCost} ${article.currency}</td>
  <td class="align-middle" id="sumItems${i}"></td>
  <td class="align-middle"><i class="borrar-producto fas fa-times-circle"  onclick="articles.splice(${i},1); showCart(articles); showFinal(articles)"></i></td>
  </tr>
  `;
    }
}
    document.getElementById("muestroelementos").innerHTML = html;
}
// recorre el array obteniendo los resultados del mismo para hacer las cuentas
function showFinal(array) {
    var subtotal = 0;
    
    var sumArt = 0;

    for (i = 0; i < array.length; i++) {
        article = array[i];
        let cantidad = document.getElementById("inputcount" + i).value;
        
// si se encuentra en pesos uruguayos lo paso a dolares
        if (article.currency == "UYU") {
            sumArt = article.unitCost * cantidad / 40;
        } else if (article.currency == "USD") {
            sumArt = article.unitCost * cantidad;
        }

        subtotal += sumArt;
        document.getElementById("sumItems" + i).innerHTML = sumArt + ` USD`;
    }
    
    var total = subtotal;

    if (comissionPercentage != 0) {
        total = subtotal + ( subtotal * comissionPercentage);
    }

    // muestro los valores en pantalla
    document.getElementById("sumoSubT").innerHTML = (subtotal).toFixed(2) + ` USD`;
    document.getElementById("envio").innerHTML = (subtotal * comissionPercentage).toFixed(2) + ` USD`;    document.getElementById("totalFinal").innerHTML = (total).toFixed(2) + ` USD`;  
    document.getElementById("totalFinal").innerHTML = (total).toFixed(2) + ` USD`;
    
}





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            articles = resultObj.data.articles;
            showCart(articles);
            showFinal(articles);
        }
    });

    //cambios en el valor del comissionPercentage
    document.getElementById("premiumradio").addEventListener("change", function () {
        comissionPercentage = 0.15;
        showFinal(articles);
    });

    document.getElementById("expressradio").addEventListener("change", function () {
        comissionPercentage = 0.07;
        showFinal(articles);
    });

    document.getElementById("standardradio").addEventListener("change", function () {
        comissionPercentage = 0.05;
        showFinal(articles);
    });
});

var direccion = document.getElementById('direccion');
var pais = document.getElementById('pais');
var email = document.getElementById('email');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    
    
    
var mensajesError = [];

if(direccion.value === null || direccion.value ===''){
    mensajesError.push('ingresa tu direccion');
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes completar los campos para continuar!',
        footer: '<a href>Volver al carro</a>'
      })
      
}
if(pais.value === null || pais.value ===''){
    mensajesError.push('ingresa tu pais');
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes completar los campos para continuar!',
        footer: '<a hrefVolver al carro</a>'
      })
      
}
if(email.value === null || email.value ===''){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes completar los campos para continuar!',
      
        footer: '<a href>Volver al carro</a>'
        
      })
    mensajesError.push('ingresa tu email');
      
    

}

 error.innerHTML = mensajesError.join(',');

    return false;

}