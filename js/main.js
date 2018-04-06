(function(){
  "use strict";
  var regalo = document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function(){

    // Campos Pases
      var nombre  = document.getElementById('nombre');
      var apellido = document.getElementById('apellido');
      var email = document.getElementById('email');



    // Campos Usuarios

      var pase_dia = document.getElementById('pase_dia');
      var pase_dia = document.getElementById('pase_dosdias');
      var pase_dia = document.getElementById('pase_completo');



      // Buttons and divs

      var calcular  = document.getElementById('calcular');
      var errorDiv  = document.getElementById('error');
      var botonRegistro  = document.getElementById('botonRegistro');
      var  lista_productos = document.getElementById('lista-productos');
      var suma = document.getElementById('suma-total');
      // extras
      var etiquetas = document.getElementById('etiquetas');
      var camisas = document.getElementById('camisa_evento');

      calcular.addEventListener('click', calcularMontos);


      pase_di.addEventListener('blur', mostrarDias);
      pase_dosdias.addEventListener('blur', mostrarDias);
      pase_completo.addEventListener('blur', mostrarDias);


      function calcularMontos (event){
        event.preventDefault();
        if (regalo.value == ''){
          alert('debes elegir un regalo');
          regalo.focus();
        }else {
          console.log(pase_di.value);
          console.log(pase_dosdias.value);
          console.log(pase_completo.value);
          var boletosDia = parseInt(pase_di.value, 10) || 0,
              boletosDos = parseInt(pase_dosdias.value,10) || 0,
              boletosCom = parseInt(pase_completo.value, 10) || 0,
              cantCamisas = parseInt(camisas.value, 10) || 0,
              cantEtiquetas = parseInt(etiquetas.value, 10) || 0,
           totalPagar = (boletosDia * 30 ) + (boletosDos * 40) + (boletosCom * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2 );
           var listadoProductos = [];
           if (boletosDia >=1){
           listadoProductos.push(boletosDia + ' Pases por día');
         }
           if (boletosDos >=1){
           listadoProductos.push(boletosDos + ' Pases por 2 días');
         }
           if (boletosCom >=1){
           listadoProductos.push(boletosCom + ' Pases por compeltos');
         }
         if (cantCamisas >=1){
         listadoProductos.push(cantCamisas + ' Camisas');
       }
       if (cantEtiquetas >=1){
       listadoProductos.push(cantEtiquetas + ' Etiquetas');
     }
     lista_productos.style.display= "block";
      lista_productos.innerHTML = '';
     for(var i = 0 ; i <listadoProductos.length; i++){
       lista_productos.innerHTML += listadoProductos[i] + '<br/>';
     }
     suma.innerHTML = "$ " + totalPagar.toFixed(2);
    }
  }

  function mostrarDias() {
    var boletosDia = parseInt(pase_di.value, 10) || 0,
        boletosDos = parseInt(pase_dosdias.value,10) || 0,
        boletosCom = parseInt(pase_completo.value, 10) || 0;
    var diasElegidos = [];
    if (boletosDia > 0) {
      diasElegidos.push('viernes');
      console.log(diasElegidos);
    }
    if (boletosDos > 0) {
      diasElegidos.push('viernes','sabado');
      console.log(diasElegidos);
    }
    if (boletosCom > 0) {
      diasElegidos.push('viernes', 'sabado', 'domingo');
      console.log(diasElegidos);
    }
    for (var i = 0; i < diasElegidos.length; i++) {
      document.getElementById(diasElegidos[i]).style.display = 'block';
    }

  }
});//codigo que solo se ejecuta una vez


})();
