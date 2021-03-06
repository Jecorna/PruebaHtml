var api = 'AIzaSyAhRpWTEBX0bFgE6ZcdjN7KlrX6K8e-Vqg';

function initMap() {
  var latLng = {
    lat: 19.3804874,
    lng:-99.1837965
  };

  var map = new google.maps.Map(document.getElementById('mapa'), {
    'center': latLng,
    'zoom': 17,
    'mapTypeId': google.maps.MapTypeId.ROADMAP

  });
  var contenido = '<h2>ServerWare</h2>'+
                    '<p>Somos tu mejor opción</p>'+
                    '<p>¡¡¡Visitanos!!!</p>';
  var informacion = new google.maps.InfoWindow({
    content: contenido
  });
  var marker = new google.maps.Marker({
  position: latLng,
  map: map
});
marker.addListener('click', function(){
  informacion.open(map, marker);
});
}
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

      nombre.addEventListener('blur', validarCampos);
      apellido.addEventListener('blur', validarCampos);
      email.addEventListener('blur', validarCampos);
      email.addEventListener('blur', validarMail);

      function validarCampos() {
        var valida ;
        do {
          if (this.value == '') {
              errorDiv.style.display = 'block';
              errorDiv.innerHTML = "Este campo es obligatorio";
              this.style.border = '1px solid red';
              errorDiv.style.border = '1px solid red';
              return valida = 0;
          }else {
            errorDiv.style.display = 'none';
            errorDiv.innerHTML = "Este campo es obligatorio";
            this.style.border = '1px solid black';
            errorDiv.style.border = '1px solid red';
            return valida = 1;
          }
        } while (valida.value = 1);
        console.log(valida.value);
      }
      function validarMail(){
        if (this.value.indexOf("@") > -1) {
          errorDiv.style.display = 'none';
          this.style.border = '1px solid black';
        }else {
          errorDiv.style.display = 'block';
          errorDiv.innerHTML = "Debe estar completo @";
          this.style.border = '1px solid red';
          errorDiv.style.border = '1px solid red';
        }
      };

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
