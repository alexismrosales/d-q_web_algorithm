/* Implementacion para mostrar el algoritmo */

array = ["rojo", "rodillo","rotoplas"];

//var iteracion;
/* PARTE QUE DEBERIA CAMBIAR LOS COLORES AL RECORRERSE */

$(document).ready(function(){



   $("#botonsito").click(function(){
     mostrar(array);
     colorear(array);
   });
});



function mostrar()
{
  let $arrayContainer = $("<div></div>").addClass("array-container");

	for (let arr of array) {
      let $element = $("<div></div>").addClass("array-element");
      for (let i = 0; i < arr.length; i++) {
      let $value = $("<p></p>").text(arr[i]).addClass('id-'+i);
	   	$arrayContainer.append($element.append($value));
    }
	}
	$("section.bloque").append($arrayContainer);
  return $arrayContainer;
}


function colorear()
{
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        if (arr[i] === array[0]) {
         $(".id-"+i).css("background-color","yellow"); 
        }else{
          $(".id-"+i).css("background-color","red");
        }
      }   
    }
}


