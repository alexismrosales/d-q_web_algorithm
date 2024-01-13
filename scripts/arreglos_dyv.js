/**
 * @public
 * @param {array} arreglo 
 * @param {size} tam
 * @returns {Jquery Object} 
 */
function mostrarArray_dyv(arreglo)
{
    let $contenedorArreglos = $("<div></div>").addClass("contenedor-arreglos");
    
        for(i of arreglo)
        {
            let $value = $("<p></p>").text(i);
		    let $element = $("<div></div>").addClass("elemento-cadena");
		    $contenedorArreglos.append($element.append($value));
        }
        $("section.animacion_dyv").append($contenedorArreglos);
        function centrar() {
            $contenedorArreglos.css(
                "left",
                $("section.animacion_dyv").width() / 2 -
                    $contenedorArreglos.width() / 2 +
                    "px"
            );
        }
        centrar();
        $(window).resize(centrar -1000);
        return $contenedorArreglos;
      
}