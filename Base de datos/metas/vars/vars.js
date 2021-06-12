var nombre="ecabrera"
var email="eduardo_cab134@outlook.com"
var edad= "21"

function getNombre() {
  console.log(nombre);

	//accesamos al DOM
  
  var myNameElement = document.getElementById("nombre");
  //myNameElement es un div
  myNameElement.innerHTML = '<H4>'+ nombre +  '<H4>';
 
}

function getEmail() {
  console.log(email);

        //accesamos al DOM

  var myNameElement = document.getElementById("email");
  //myNameElement es un div
  myNameElement.innerHTML = '<H3>'+ email +  '<H3>';


}
function getEdad() {
  console.log(edad);

        //accesamos al DOM

  var myNameElement = document.getElementById("edad");
  //myNameElement es un div
  myNameElement.innerHTML = '<H1>'+ edad +  '<H1>';
  //RGB Red Green Blue (RRGGBB)
  myNameElement.style.color = "#FF00FF";


}

