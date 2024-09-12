
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});



document.addEventListener('DOMContentLoaded', function() {

  const lista = document.querySelectorAll("#Lista a");
  for (let i = 0; i < lista.length; i++) {
    lista[i].classList.add("waves-effect", "valign-wrapper");
  }

  const enlaces = document.querySelectorAll("#Lista a");
  enlaces.forEach(function(enlace) {
  enlace.style.color = "white";
  });

  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);

  $(document).ready(function(){
    $('.tabs').tabs();
    $('select').formSelect();
  });
  


  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems,{
      autoClose:true,
      setDefaultDate:true,
      showClearBtn:true
    });
  })

 //Alerta Modulo compra
 function mostrarcompra() {
  // Obtener los valores de los inputs
  var valorInput1 = document.getElementById("Nombrec").value;
  var valorInput2 = document.getElementById("Codigoc").value;
  var valorInput3 = document.getElementById("Fechac").value;
  var select= document.getElementById("tipc");
  var valorSeleccionado = select.value;
  // Crear el mensaje de la alerta
  
  var mensaje = "DATOS DEL CLIENTE" + "\n";
  mensaje += "Fecha: " + valorInput3 + "\n";
  mensaje += "Nombre: " + valorInput1 + "\n";
  mensaje += "Tipo de documento: " + valorSeleccionado + "\n";
  mensaje += "Codigo: " + valorInput2;
  
  // Mostrar la alerta con la información
  alert(mensaje);

}



  //Alerta Modulo venta
  function mostrarventa() {
    // Obtener los valores de los inputs
    var valorInput1v = document.getElementById("Nombre").value;
    var valorInput2v = document.getElementById("Codigo").value;
    var valorInput3v = document.getElementById("Fecha").value;
    var selectv= document.getElementById("tipd");
    var valorSeleccionadov = selectv.value;
    // Crear el mensaje de la alerta
    
    var mensajev = "DATOS DEL CLIENTE" + "\n";
    mensajev += "Fecha: " + valorInput3v + "\n";
    mensajev += "Nombre: " + valorInput1v + "\n";
    mensajev += "Tipo de documento: " + valorSeleccionadov + "\n";
    mensajev += "Codigo: " + valorInput2v;
    
    // Mostrar la alerta con la información
    alert(mensajev);

    
 
}
//Tabla ventas

var lista=document.getElementById('listav');
  var datav = [];
  var canti = 0;

  document.addEventListener("DOMContentLoaded", function() {
  var botonv = document.getElementById('adicionar');
  if (botonv) {
  botonv.addEventListener("click", adicionar);
  } else {
  console.error("No se pudo encontrar el botón con ID 'adicionar'.");
   }
    });

  function adicionar() {
   var productov = document.getElementById('productov').value;
   var umedv = document.getElementById('umedv').value;
   var cantidadv = parseFloat(document.getElementById('cantidadv').value);
   var preciov = parseFloat(document.getElementById('preciov').value);
   var totalv = cantidadv * preciov;
   

  datav.push({
  "id": canti,
  "productov": productov,
  "umedv":umedv,
  "cantidadv": cantidadv,
  "preciov": preciov,
  "totalv": totalv
     });
     
  var id_rowv = 'row' + canti;
  var fila = ' <tr id="' + id_rowv + '">' +
  '<td>' + productov + '</td>' +
  '<td>' + umedv + '</td>' +
  '<td>' + cantidadv + '</td>' +
  '<td>$' + preciov.toFixed(2) + '</td>' + // Formateo del precio a 2 decimales
  '<td>$' + totalv.toFixed(2) + '</td>' + // Formateo del total a 2 decimales
  '<td>' +
  '<a href="#" class=" btn-floating waves-effect waves-light btn red" onclick="eliminarv(' + canti + ')"> <i class="material-icons">delete</i></a>' +
  '</td>' +
  '</tr>';    

  $("#listav").append(fila);
  $("#productov").val('');
  $("#umedv").val('');
  $("#cantidadv").val('');
  $("#preciov").val('');
  $("#productov").focus();
  canti++;
  sumarv();
    }

function sumarv() {
var totv = 0;
for (x of datav) {
  totv = totv + x.totalv;
 }
  document.getElementById('totalv').innerHTML = "Valor total: $" + totv;
  }
  function eliminarv(row) {
  var tablev = document.getElementById("listav");
  var rowIndex = -1;
    
  // Busca la fila que corresponde al ID proporcionado
  for (var i = 0; i < tablev.rows.length; i++) {
  if (tablev.rows[i].id === "row" + row) {
  rowIndex = i;
  break;
  }
  }
    
  // Si se encontró la fila, se elimina
  if (rowIndex !== -1) {
  tablev.deleteRow(rowIndex);
        
  // Elimina el elemento correspondiente del array 'data'
  var newData = [];
  for (var j = 0; j < datav.length; j++) {
  if (datav[j].id !== row) {
  newData.push(datav[j]);
  }
  }
  datav = newData;
        
  // Recalcula la suma total
  sumarv();

 }
}
//Tabla compras
           
  var lista=document.getElementById('lista');
  var data = [];
  var cant = 0;

  document.addEventListener("DOMContentLoaded", function() {
  var boton = document.getElementById('agregar');
  if (boton) {
  boton.addEventListener("click", agregar);
  } else {
  console.error("No se pudo encontrar el botón con ID 'agregar'.");
   }
    });

  function agregar() {
   var producto = document.getElementById('producto').value;
   var cantidad = parseFloat(document.getElementById('cantidad').value);
   var unimed=document.getElementById('unimed').value;
   var precio = parseFloat(document.getElementById('precio').value);
   var descrip=document.getElementById('descrip').value;
   var total = cantidad * precio;
   

  data.push({
  "id": cant,
  "producto": producto,
  "cantidad": cantidad,
  "unimed":unimed,
  "precio": precio,
  "descrip":descrip,
  "total": total
     });
     
  var id_row = 'row' + cant;
  var fila = ' <tr id="' + id_row + '">' +
  '<td>' + producto + '</td>' +
  '<td>' + cantidad + '</td>' +
  '<td>' + unimed + '</td>' +
  '<td>$' + precio.toFixed(2) + '</td>' + // Formateo del precio a 2 decimales
  '<td>' + descrip + '</td>' +
  '<td>$' + total.toFixed(2) + '</td>' + // Formateo del total a 2 decimales
  '<td>' +
  '<a href="#" class=" btn-floating waves-effect waves-light btn red" onclick="eliminar(' + cant + ')"> <i class="material-icons">delete</i></a>' +
  '</td>' +
  '</tr>';    

  $("#lista").append(fila);
  $("#producto").val('');
   $("#cantidad").val('');
   $("#unimed").val('');
  $("#precio").val('');
  $("#descrip").val('');
  $("#producto").focus();
  cant++;
  sumar();
    }

 function sumar() {
 var tot = 0;
 for (x of data) {
 tot = tot + x.total;
  }
  document.getElementById('total').innerHTML = "Valor total: $" + tot;
 }

 function eliminar(row) {
  var table = document.getElementById("lista");
  var rowIndex = -1;
    
  // Busca la fila que corresponde al ID proporcionado
  for (var i = 0; i < table.rows.length; i++) {
  if (table.rows[i].id === "row" + row) {
  rowIndex = i;
  break;
   }
    }
    
 // Si se encontró la fila, se elimina
  if (rowIndex !== -1) {
  table.deleteRow(rowIndex);
        
  // Elimina el elemento correspondiente del array 'data'
  var newData = [];
  for (var j = 0; j < data.length; j++) {
  if (data[j].id !== row) {
  newData.push(data[j]);
  }
   }
  data = newData;
        
    // Recalcula la suma total
    sumar();

    }
}

/* 
 //Borrar informacion del formulario

 function borrarInformacion() {
  // Seleccionar el formulario por su ID
  var formulario = document.getElementById("venform");
  
  // Utilizar el método reset() para borrar la información
  formulario.reset();
}
*/

  
  
  





