document.addEventListener('DOMContentLoaded', function() {
  cargarMusicoList();


  document.getElementById('registroForm').addEventListener('submit', function(event) {

      event.preventDefault();
      registrar();
  });

});


function registrar() {

  var nombre = document.getElementById('nombre').value;
  var instrumento = document.getElementById('instrumento').value;
  var ciudad = document.getElementById('ciudad').value;
  var genero = document.getElementById('genero').value;
  var contacto = document.getElementById('contacto').value;


  var musico = {
      nombre: nombre,
      instrumento: instrumento,
      ciudad: ciudad,
      genero: genero,
      contacto: contacto

  };


  var musicos = obtenerMusicos();

  musicos.push(musico);

  localStorage.setItem('musicos', JSON.stringify(musicos));

  cargarMusicoList();

  document.getElementById('registroForm').reset();
}


function obtenerMusicos() {

  var musicosString = localStorage.getItem('musicos');

  return musicosString ? JSON.parse(musicosString) : [];
}



function cargarMusicoList() {

  var musicos = obtenerMusicos();

  var musicoListElement = document.getElementById('musicoList');

  musicoListElement.innerHTML = ''; 

  musicos.forEach(function(musico) { 
      
      var musicoContainer = document.createElement('div');
      musicoContainer.classList.add('musico-container'); 

      var listItem = document.createElement('li');
      
      listItem.innerHTML = `Nombre: ${musico.nombre} - Instrumento: ${musico.instrumento}<br>Ciudad: ${musico.ciudad} - Género: ${musico.genero}<br>Contacto: ${musico.contacto}`;

      musicoContainer.appendChild(listItem);
      musicoListElement.appendChild(musicoContainer);
    });

}
