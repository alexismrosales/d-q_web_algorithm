    var inputsCounter_dyv = 0;
    var tamG_dyv; //Tamaño del problema
    var cadenas_dyv = []; //Arreglo con strings
    var tam_ant_dyv;

    //Generando inputs dinamicos

    let label1_dyv = document.getElementById("label_dyvID");
    let boton_dyv = document.getElementById("iniciar_dyv");
    let animacion_dyv = document.getElementById("animacion_dyvID");
    label1_dyv.hidden = true;
    boton_dyv.hidden = true;
    animacion_dyv.hidden = true;
    function generarInputsDYV()
    {
        let tam_dyv = document.getElementById("tam_dyv").value;
        tamG_dyv = tam_dyv;
        label1_dyv.hidden = true; //Se activa el mensaje
        if(tam_dyv < 1 || tam_dyv > 6)
        {    
            label1_dyv.hidden = false;
            return;
        }
        //Removiendo los inputs si es que ya hay
        if(inputsCounter_dyv != 0)
        {
            //removerInputsDYV(tam_ant_dyv); FALTA CORREGIR FUNCIÓN REMOVER INPUTS
            console.log(tam_ant_dyv);
            return;
        }
        else{
        for(let i = 0; i < tam_dyv; i++)
            crearInputDYV();
            boton_dyv.hidden = false;
            tam_ant_dyv = tam_dyv;
        }
    }
    function crearInputDYV()
    {
        var inputE_dyv = document.createElement("input");
        //Añadiendo los datos de entrada del arreglo
        inputE_dyv.classList.add("inputsDinamicos");
        inputE_dyv.type = "text";
        //Añadiendo nombres de id numerandolos
        inputE_dyv.id = ""+inputsCounter_dyv+"dyv";
        inputsCounter_dyv++;
        inputE_dyv.maxLength = "50";
        document.getElementById("inputs_dyvID").appendChild(inputE_dyv);

    }
    function removerInputsDYV(tam_dyv)
    {

        for(let i = 0; i < tam_dyv; i++){
            let input_dyv = document.getElementById(i.toString()+"dyv");
            console.log(i.toString()+"dyv");
            document.getElementById(i.toString()+"dyv").remove();
            input_dyv.removeAttribute('id');
            console.log("id: " + i);
        }
    }

    function arregloCadenasDYV()
    {
        for(let i = 0; i < tamG_dyv; i++)
            cadenas_dyv[i] = document.getElementById(i.toString()+"dyv").value.toLowerCase();
            animacion_dyv.hidden = false;
        //canvas.hidden = false;
    }


    //Ejecución de funciones de la animacion
    $(document).ready(() => {

        //Se inicia la animacion
        $('#iniciar_dyv').click(() => {
            //$("section.errors p").text("");
            let $array = getArrayValue();
            const palabra = PrefijoComunMasLargo(cadenas_dyv,0,cadenas_dyv.length-1);
            sort($array[0]);
            
           // $('.prefijo_dyv').text("El prefijo es: " + palabra).setInterval(palabra,100);
        });
        $('.prefijo_dyv').text("El prefijo es: " + palabra).setInterval(palabra,100);
    });
