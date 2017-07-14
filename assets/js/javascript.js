/* Debes pegar todo el código en main.js*/
var frutas = [];
var records = document.getElementById('frutillas');

// Constructor para generar un nuevo producto
function Producto(compra)
{
  this.compra = compra.toLowerCase();
}

//Método para imprimir un producto en html
Producto.prototype.toHTML = function () 
{
  var html = '';
  html += "<li>"+this.compra.toUpperCase()+"</li>";
  html += '<br><br>';
  return html;
}

//Función que une todas las compras guardadas en el array frutas
function mergeHTML ()
{
  var html = '';
  for (var i=0; i<frutas.length; i++)
  {
    html += frutas[i].toHTML();
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html)
{
  records.innerHTML = html;
  records.innerHTML = html;
}

// Cuando hacen click en el boton de nueva compra, crea una nueva 
//compra y la añade al array de frutas
var boton = document.getElementById('agregarFruta');
boton.onclick = function () 
{
  var compra = document.getElementById('caja').value;
  var product  = new Producto (compra);
  frutas.push(product);
  mostrar();

};


// al hacerle click a mostrar todas las compras, imprime todas las 
//compras en el html. ESTA ESTÁ BUENA, NO CAMBIAR NADA
// var printAll = document.getElementById('agregarFruta');
function mostrar() 
 {
   printHTML(mergeHTML());
 }