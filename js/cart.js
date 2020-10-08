
let elemento0 = {};
let elemento1 = {};
let valor0 = 0;
let valor2 = 0;
let num0 = 0;
let num1 = 0;


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultCart) {
        if (resultCart.status === "ok") {
            articulo0 = resultCart.data;

            elemento0 = document.getElementById("articulo0");
            elemento1 = document.getElementById("articulo1");
            valor0 = document.getElementById("costo0");
            valor1 = document.getElementById("costo1");
            num0 = document.getElementById("numero0");
            num1 = document.getElementById("numero1");

            for (let i = 0; i < articulo0.articles.length; i++) {
                elemento0.innerHTML = articulo0.articles[0].name;
                valor0.innerHTML = articulo0.articles[0].currency + ` ` + articulo0.articles[0].unitCost;
                num0.value = articulo0.articles[0].count;

                if (articulo0.articles[i]) {

                    elemento1.innerHTML = articulo0.articles[i].name;
                    valor1.innerHTML = articulo0.articles[i].currency + ` ` + articulo0.articles[i].unitCost;
                    num1.value = articulo0.articles[i].count;
                }
            }

        }


    })
});


let impSubtotal = 0;
let impSub2 = 0;
let subT = 0;
var subT2 = 0;
let porcentajeEnvio = 0.15;


   //funcion que trae el numero del input, se lo paso a una variable  e imprimo en otro id el monto.
   document.getElementById("numero0").addEventListener("change", function () {
    var num0 = document.getElementById("numero0").value;

    impSubtotal = document.getElementById("subTotal");
    impSubtotal.innerHTML = num0 * 100;
    subT = 100 * num0;
    subT = this.value

    actualizarCostos();

});

//funcion que trae el numero del input, se lo paso a una variable  e imprimo en otro id el monto.
document.getElementById("numero1").addEventListener("change", function () {
    var num1 = document.getElementById("numero1").value;

    impSub2 = document.getElementById("subTotal2");
    impSub2.innerHTML = (40 * 12500) * num1;
    subT2 = (Math.round(12500 * 40) * impSub2);

    subT2 = this.value;
    actualizarCostos();

});

function actualizarCostos() {

    let subText = document.getElementById("subtotalText");
    let envText = document.getElementById("envioText");
    let totalText = document.getElementById("totalCostText");

    //calculo el precio unitario del pino
    var t1 = (subT * 100);
    //calculo el precio unitario de autos y lo paso a pesos 
    var t2 = (subT2 * 12500 * 40);
    var t = (t2 + t1);

    let subtextHTML = t;
    let costoEnvioHTML = Math.round(porcentajeEnvio * t);
    let totalEnvioHTML = Math.round(t + costoEnvioHTML);

    subText.innerHTML = subtextHTML;
    envText.innerHTML = costoEnvioHTML;
    totalText.innerHTML = totalEnvioHTML;

}


let impSubtotal = 0;
let impSub2 = 0;
let subT = 0;
var subT2 = 0;
let porcentajeEnvio = 0.15;


document.addEventListener("DOMContentLoaded", function (e) {


    //funcion que trae el numero del input, se lo paso a una variable  e imprimo en otro id el monto.
    document.getElementById("numero0").addEventListener("change", function () {
        var num0 = document.getElementById("numero0").value;

        impSubtotal = document.getElementById("subTotal");
        impSubtotal.innerHTML = num0 * 100;
        subT = 100 * num0;
        subT = this.value

        actualizarCostos();

    });

    //funcion que trae el numero del input, se lo paso a una variable  e imprimo en otro id el monto.
    document.getElementById("numero1").addEventListener("change", function () {
        var num1 = document.getElementById("numero1").value;

        impSub2 = document.getElementById("subTotal2");
        impSub2.innerHTML = (40 * 12500) * num1;
        subT2 = (Math.round(12500 * 40) * impSub2);

        subT2 = this.value;
        actualizarCostos();

    });


    document.getElementById("premiumradio").addEventListener("change", function () {
        porcentajeEnvio = 0.15;
        actualizarCostos()
    });

    document.getElementById("expressradio").addEventListener("change", function () {
        porcentajeEnvio = 0.07;
        actualizarCostos()
    });

    document.getElementById("standardradio").addEventListener("change", function () {
        porcentajeEnvio = 0.05;
        actualizarCostos()
    });








});
