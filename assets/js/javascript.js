/* Debes pegar todo el código en main.js*/
var frutas = [];
var records = document.getElementById('records');

// Constructor para generar un nuevo producto
function Producto(compra)
{
  this.compra = compra.toLowerCase();
  thi ;
}

//Método para imprimir un producto en html
Producto.prototype.toHTML = function () 
{
  var html = '';
  html += this.compra.toUpperCase() + '<br>';
  html += 'Cantidad : ' + this.cantidad + '<br>';
  html += '<br><br>';
  return html;
}

//Función que une todas las compras guardadas en el array frutas
function mergeHTML ()
{
  var html = '';
  for (i=0; i<frutas.length; i++)
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
var addCompra = document.getElementById('nuevacompra');
addCompra.onclick = function () 
{
  var compra = prompt('Ingrese su nueva compra');
  var cantidad = prompt('Ingrese la cantidad');
  var product  = new Producto (compra, cantidad);
  frutas.push(product);
  printHTML(product.toHTML());
};


// al hacerle click a mostrar todas las compras, imprime todas las 
//compras en el html. ESTA ESTÁ BUENA, NO CAMBIAR NADA
var printAll = document.getElementById('print');
printAll.onclick = function() 
{
  printHTML(mergeHTML());
}