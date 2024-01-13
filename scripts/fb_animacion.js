//Animación fuerza bruta
/* Implementacion para mostrar el algoritmo */

var iteracion;
/* PARTE QUE DEBERIA CAMBIAR LOS COLORES AL RECORRERSE */

$(document).ready(function(){
    $('.fb_iniciar').live('click', function()
    {
        console.log("ok")
        mostrar(cadenas_fb);
     $("#iniciar_fb").prop("disabled",true)
    colorear();
    }) 
});

function mostrar()
{
    console.log("a");
  let $arrayContainer = $("<div></div>").addClass("array-container");
	let $contador= $("<p></p>").addClass("contador-fb").text("Contador: 0");
  let $prefijo = $("<h2></h2>").addClass("prefijo-fb").text("Prefijo: ");
  let j;
  for (let arr of cadenas_fb) {
      console.log(arr)
      j = cadenas_fb.indexOf(arr,"no hay");
      let $element = $("<div></div>").addClass("array-element").attr('id', 'array-element-'+j);
      for (let i = 0; i < arr.length; i++) {
      let $value = $("<p></p>").text(arr[i]).addClass('id-'+i);
	   	$arrayContainer.append($element.append($value));
      j++;
    }
	}
  $arrayContainer.append($contador);
  $arrayContainer.append($prefijo);
	$("section.bloque").append($arrayContainer);
  return $arrayContainer;
}


function colorear()
{
    //Primero se iluminara la palabra de menor tamaño
    let palabraMenor = 100;
    let pos, contador = 0;
  
    for(let i = 0; i < cadenas_fb.length; i++)
      if(cadenas_fb[i].length < palabraMenor){
        palabraMenor = cadenas_fb[i].length;
        pos = i; 
      }
      //Marcamos la primera palabra de color, sera con la que se va a comparar
      for(let i = 0; i < cadenas_fb[pos].length; i++)
          //$("#array-element-"+pos+" .id-"+i).css("background-color","blue");
          //Comenzamos a comparar las demas palabras con la de menor tamaño
          
      for(let j = 0; j < palabraMenor; j++)
      {
        
        for(let i = 1; i < cadenas_fb.length; i++)
        {  //Comparamos el primer caracter de la primera palabra con las demas
          if(cadenas_fb[0][0] != cadenas_fb[i][0])
          {
            $("#array-element-"+i+" .id-0").css("background-color","red");
            $("#array-element-"+0+" .id-0").css("background-color","red");
            return;
          }
          //Se compara con los demas caracteres de las demas cadenas

          if(cadenas_fb[0][j] == cadenas_fb[i][j])
          {
            
            $("#array-element-"+i+" .id-"+j).css("background-color","purple");
            $("#array-element-"+0+" .id-"+j).css("background-color","purple"); 
          }
          else{
            //Disminuye contador 
            palabraMenor = 0;
            contador--; 
            $('.contador-fb').text("Contador: "+(contador));
            break;
          }
        }
        //Aumenta contador
        contador++;
        $('.contador-fb').text("Contador: "+ (contador));
      }
      clearInterval(iteracion);
      let prefijo = "";
      for(let i = 0; i < contador; i++)
      {
        prefijo +=cadenas_fb[0][i];
        $('.prefijo-fb').text("Prefijo: "+prefijo);
      }
      console.log("El prefijo es "+prefijo)
      
}

