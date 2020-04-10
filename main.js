function suma(){
  var especie;
  var cantidad;
  var precio;
  var total;
  especie = document.getElementById('especie').value;
  cantidad = document.getElementById('cant').value;
  precio = document.getElementById('compra').value;
  total = cantidad*precio;
  document.getElementById('subtotal').value = total;

  if(total > 0){
    $(".cuadro2").append(`<div class="row">
      <p class='col-3'>${especie}</p>
      <p class='col-2'>${cantidad}</p>
      <p class='col-2'>${precio}</p>
      <p class='col-3'>${total}</p>
      <p class="col-2"><input type='button' class='btn btn-danger' value='-' 
      onclick='borrar(event)' ></p></div>
    `)
  }

  // Muestro u oculto el encabezado de la tabla dependiende de si esta vacia o no
  if ($('.cuadro2').children().length) {
    $(".parrafo").removeClass("invisible");
    $(".parrafo").show();
    $(".cuadro").removeClass("invisible");
    $(".cuadro").show();
    reset();
  } else {
    $(".parrafo").hide();
    $(".cuadro").hide();
  }

};

function borrar(e){
  $(e.target).parent().parent().remove();
  if($('.cuadro2').find('.row').length===0){
    $('.parrafo').hide();
    $('.cuadro').hide();
  }
}

function reset(){
     document.getElementById('especie').value = "";
     document.getElementById('cant').value = "";
     document.getElementById('compra').value = "";
     document.getElementById('subtotal').value = "";
}