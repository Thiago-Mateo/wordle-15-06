// palabras para el juego, agregar las que quieran siempre de 5 letras
// es un array de strings (dict por dictionary)
let dict = [
  'gatos',
  'papas',
  'fuego',
  'huevo',
  'color',
  'casas',
  'arbol',
  'nueve',
  'zorro',
  'remar',
  'locro',
  'jamon',
  'feliz',
  'cinco',
  'tonto',
  'cuero',
  'volar',
  'vuelo',
  'avion',
  'genio',
  'pibes'
];
  let rand = Math.random() * 10;
  console.log(rand);

  rand = Math.floor(rand);

let palabra = dict[rand];
console.log(palabra);
// for(let i = 0; i <= rand; i++){
//   if (i == rand) {
//     palabra = dict(rand)
//   }
// }
//let palabra = "fuego"

var textCaja = document.getElementById("texto");
var contador = 0;
var width = 5;
var height = 6;
var intentos = 0;
var letras = 0;

textCaja.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
        var texto;
        texto = textCaja.value;
        if(texto.length == 5){
          if(contador < 5){
             mostrarPalabra(texto);
          }else{
            alert("No tiene mas jugadas");
          }
          textCaja.value = "";
          contador++;
        }else{
          alert("Por favor ingrese una palabra de 5 caracteres");
        }

    }
});

function mostrarPalabra(texto){
 var letra;
 var color = "gris";
  for(var i = 0; i < 5 ; i++){
   letra = texto[i];
      for(var j = 0; j < 5 ; j++){
        if(letra == palabra[j]){
           if(i == j){
            color = "verde";
           }else{
            color = "amarillo";
           }
        }
      }
    crearInput(letra,color);
    color = "gris";

  }
  var divPadre = document.getElementById("juego" + (contador+1));
  var inputs = divPadre.getElementsByClassName("correctas");
  if(inputs.length == 5) {
    alert("ganaste");
    contador = 5;
  }

}

function crearInput(letra,color){
  var div = document.getElementById("juego" + (contador+1));

  var input = document.createElement("input");
  input.classList.add("cajitas");
  input.setAttribute("disabled",true);
  input.value = letra;
  if(color == "amarillo"){
    input.classList.add("presentes");
  }
  if(color == "verde"){
     input.classList.add("correctas");
  }

  div.append(input);



}

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
location.reload();
})
