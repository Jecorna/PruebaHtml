(function(){
  "use strict";
  var regalo = document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function(){
    console.log("Listo");

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
      var  resultado = document.getElementById('lista-productos');

      // extras
      var etiquetas = document.getElementById('etiquetas');
      var camisas = document.getElementById('camisa_evento');

      calcular.addEventListener('click', calcularMontos);

      function calcularMontos (event){
        event.preventDefault();
        if (regalo.value == ''){
          alert('debes elegir un regalo');
          regalo.focus();
        }else {
          console.log(pase_dia.value);
          console.log(pase_dosdias.value);
          console.log(pase_completo.value);
          var boletosDia = parseInt(pase_dia.value, 10) || 0,
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
          console.log(listadoProductos);
           alert("Tienes que pagar:" + totalPagar);
        }
      }
});//codigo que solo se ejecuta una vez


})();
