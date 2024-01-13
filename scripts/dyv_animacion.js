const sideMargin = 20;
const topMargin = 20;
let miliseconds = {value: 700};
let timeout = getTimeout();
let $container;
let $value3 = $('<h3></h3>').addClass('prefijo_dyv').text('El prefijo es: ');
let $value4 = $('<h3></h3>').addClass('sinPrefijo_dyv').text('No hay prefijo');

function getTimeout() {
    return miliseconds;
}
/**
 * @public 
 * @returns {Jquery Object} 
 */
 function getArrayValue() {
    return $container;
}

/**
 * @public 
 * @returns {Javascript Object} 
 */

$(document).ready(() => {
    $('#iniciar_dyv').click(() => {

        let arregloTags = []
        for(let i = 0; i < tamG_dyv; i++){
            arregloTags[i] = $('#'+i+'dyv').val();
        }
        $container = mostrarArray_dyv(arregloTags);
    
    });
});

/**
 * @private
 * @param {link tag} arreglo 
 * @param {number} inicio 
 * @param {number} fin
 * @returns {link tag} 
 */
 function crearSubArreglo(arreglo, inicio, fin) {
    let $container = $('<div></div>').addClass('contenedor-arreglos');
    
    for (let i = inicio; i < fin; i++) {
        let $value = $('<p></p>').text($(arreglo.childNodes[i]).text());
        let $element = $('<div></div>').addClass('elemento-cadena');
        //Comparamos el prefijo
        $container.append($element.append($value));
        $container.find('.prefijo').remove();
        $container.find('.prefijo2').remove();
        if(fin-inicio == 1){
            
            let $value2 = $('<p></p>').addClass('prefijo').text("Prefijo: "+$(arreglo.childNodes[i]).text());
            let prefijo = PrefijoComun($(arreglo.childNodes[i]).text(),$(arreglo.childNodes[i]).text());
            //console.log("El prefijo es "+prefijo)
            $('.prefijo_dyv').text("El prefijo es: "+ prefijo)
            $container.append($element.append($value2));
        }
        if(fin - inicio == 2 && arreglo.childNodes[i+1] != null)
        {
            let p1 = $(arreglo.childNodes[i]).text();
            let p2 = $(arreglo.childNodes[i+1]).text();
            let prefijo = PrefijoComun(p1,p2);
            $('.prefijo_dyv').text("El prefijo es: "+ prefijo)    
        } 
        
        
    }
    return $container[0];
}

/**
 * @private
 * @param {link tag} mitad 
 * @param {string} dir 
 */
 function animarDivision(mitad, dir) {
    return new Promise(resolve => {
        mitad.animate({
            transform: [
                `translate(${dir}10px, ${-$(mitad).height() - topMargin}px)`,
                'translate(0, 0)'
            ]
        }, timeout.value);
        setTimeout(() => {
            resolve();
        }, timeout.value);
    });
}
/**
 * @privateelement
 * @param {link tag} elemento 
 * @param {link tag} target  
 */
 function animarPosicion(elemento, target) {
    return new Promise(resolve => {
        elemento.animate({
            transform: [
                'translate(0, 0)',
                `translate(
                    ${$(target).offset().left - $(elemento).offset().left}px,
                    ${$(target).offset().top - $(elemento).offset().top}px
                )`
            ]
        }, timeout.value); 
        $(elemento).find('.prefijo').remove();
        $(elemento).find('.prefijo2').remove();
        setTimeout(() => {
            $(target).html($(elemento).html()); 
            $(elemento).css('opacity', '0');
            $(target).css("background", "#D6E8EE");
            resolve();
        }, timeout.value);
    });
}
/**
 * @param {link tag} arr1 
 * @param {link tag} arr2 
 * @param {link tag} target 
 */
 async function merge(arr1, arr2, target) {
    let i1 = 0, i2 = 0, i3 = 0;
    while (i1 < arr1.childNodes.length && i2 < arr2.childNodes.length) {
        await  animarPosicion(
            arr1.childNodes[i1++], target.childNodes[i3++]
        );
    }
    while (i1 < arr1.childNodes.length) 
        await  animarPosicion(
            arr1.childNodes[i1++], target.childNodes[i3++]
        );
    while (i2 < arr2.childNodes.length) 
        await animarPosicion(
            arr2.childNodes[i2++], target.childNodes[i3++]
        );
}

function sinPrefijo()
{
    let menor=100;
    for(let i = 0; i < cadenas_dyv.length; i++)
        if(cadenas_dyv[i].length < menor)
            menor = cadenas_dyv[i].length;
    
    for(let i= 0; i < menor; i++)
    {
        for(let j=1; j < cadenas_dyv.length;j++)
        {
            
            if(cadenas_dyv[0][0] != cadenas_dyv[j][0])
                return true;
        }
    }
    return false;
}
//Main de animacion
/**
 * @param {link tag} arreglo 
 */
 async function sort(arreglo) {
    
    
    // Caso base
    if (arreglo.childNodes.length <= 1)
        return;
    if(sinPrefijo() == true)
    {
        $('div.danimacion_dyv_prefijo').append($value4);
        return;
    }
    const palabra = PrefijoComunMasLargo(cadenas_dyv,0,cadenas_dyv.length-1);
    
    $('div.danimacion_dyv_prefijo').append($value3);
    let mitad = Math.floor(arreglo.childNodes.length / 2);
    let mitad1 = crearSubArreglo(arreglo, 0, mitad);
    let mitad2 = crearSubArreglo(arreglo, mitad, arreglo.childNodes.length);
    

    $('section.animacion_dyv').append(mitad1);
   
    $(mitad1).css({
        'left': `${$(arreglo).position().left - sideMargin}px`,
        'top': `${$(arreglo).position().top + $(arreglo).height() + topMargin}px`
    });
    await animarDivision(mitad1, '+', topMargin);

    $('section.animacion_dyv').append(mitad2);
    $(mitad2).css({
        'left': `${$(mitad1).position().left + $(mitad1).width() + sideMargin * 2}px`,
        'top': `${$(mitad1).position().top}px`
    });
    await animarDivision(mitad2, '-', topMargin);

    await sort(mitad1);
    await sort(mitad2);
    
   await merge(mitad1, mitad2, arreglo);
   $('.prefijo_dyv').text("El prefijo es: " + palabra)
}