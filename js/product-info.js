var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
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

