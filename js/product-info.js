var category = {};


function showImagesGallery(array) {
  let htmlContentToAppend = "";

  for (let i = 0; i < array.length; i++) {
      if (i == 0) {                             
          htmlContentToAppend += ` 
          <div class="carousel-item active">
              <img class="d-block w-100" height="500"  src="` + array[i] + `" > 
          </div> 
          `
      } else {
          htmlContentToAppend += `
          <div class="carousel-item">
              <img class="d-block w-100" height="500" src="` + array[i] + `">
          </div>    
          `
      }
  }
  document.getElementById("Carousel").innerHTML = htmlContentToAppend;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productSoldCountHTML = document.getElementById("productSoldCount");
            let productCategoryHTML = document.getElementById("productCategory");
            let productCostHtml = document.getElementById("productCost");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productSoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = '<a href="category-info.html">'+ product.category + '</a';
            productCostHtml.innerHTML = product.currency + " " +product.cost;
            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        

            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if (resultObj.status === "ok"){ 
                    let products = resultObj.data;
        
                    let html = "";
                        product.relatedProducts.forEach(function(productIndex) {
                        let productIterator = products[productIndex];
                        html += `
                        <div class="card" style= "width: 18rem;">
                            <img src="${productIterator.imgSrc}" class="card-img-top" alt="">
                            <div class= "card-body">
                                <h5 class="card-title">${productIterator.name}</h5>
                                <p class="card-text">${productIterator.description}</p>
                                <a href="category-info.html" class="btn btn-link">Ver</a>
                            </div>
                        </div>
                        `
                        document.getElementById("relatedProducts").innerHTML = html;
                        });
                    }
                });
            }
        });

    });
       
    getJSONDataComentarios(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comentarios = resultObj.data;
            showComent(comentarios);


        }
        
    
});
function showComent(comentarios){

    let htmlContentToAppend = "";
    for(comentario of comentarios){
        

       
            htmlContentToAppend += `
            <a  class="mb-1">
                <div class="caja">
                                    <div class="caja">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="caja">`+ comentario.user +`<span class="fa fa-star checked">` + comentario.score + `</span></h4>
                            
                            <small class="caja">` + comentario.dateTime+ ` </small>
                        </div>
                        <p class="mb-1">` + comentario.description + `</p>
                        
                    </div>
                    
                </div>
            </a>
            `
        

        document.getElementById("comentario").innerHTML = htmlContentToAppend;
    }
}

document.getElementById('boton').addEventListener('click', () => {
    var opinion={};
    var estrella = document.getElementsByName("puntuacion");
    for (let star of estrella){
        if(star.checked){
            var puntuacion = star.value;
        }
    }

    var fechahrs = new Date();
    var d = fechahrs.getDate();
    var día = (d < 10) ? '0' + d : d;
    var m = fechahrs.getMonth() + 1;
    var mes = (m < 10) ? '0' + m : m;
    var fecha = fechahrs.getFullYear() + `-` + mes + `-` + día ;
    var hora = fechahrs.getHours()  + `:` + fechahrs.getMinutes() + `:` + fechahrs.getSeconds();


    opinion.description = document.getElementById("comentar").value;
    opinion.user= document.getElementById('name').value;
    opinion.score=puntuacion;
    opinion.dateTime= fecha + ` ` + hora;
    comentarios.push(opinion);
    showComent(comentarios) ;
      });