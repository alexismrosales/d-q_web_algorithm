var inputsCounter_fb = 0;
var tamG_fb;//Tamaño del problema
var cadenas_fb = []; //Arreglo con strings
var tam_ant_fb;
//Animación fb

let label1_fb = document.getElementById("label_fbID");
let boton_fb = document.getElementById("iniciar_fb");
label1_fb.hidden = true;
boton_fb.hidden = true;
function generarInputsFB()
{
    let tam_fb = document.getElementById("tam_fb").value;
    tamG_fb = tam_fb;
    label1_fb.hidden = true; //Se activa el mensaje
    if(tam_fb < 1 || tam_fb > 6)
    {    
        label1_fb.hidden = false;
        return;
    }
    //Removiendo los inputs si es que ya hay
    if(inputsCounter_fb != 0)
    {
        //removerInputsFB(tam_ant_fb); FALTA CORREGIR FUNCIÓN REMOVER INPUTS
        console.log(tam_ant_fb);
        return;
    }
    else{
    for(i = 0; i < tam_fb; i++)
        crearInputFB();
        boton_fb.hidden = false;
        tam_ant_fb = tam_fb;
    }
}
function crearInputFB()
{
    var inputE_fb = document.createElement("input");
    //Añadiendo los datos de entrada del arreglo
    inputE_fb.classList.add("inputsDinamicos");
    inputE_fb.type = "text";
    //Añadiendo nombres de id numerandolos
    inputE_fb.id = ""+inputsCounter_fb+"fb";
    inputsCounter_fb++;
    inputE_fb.maxLength = "50";
    document.getElementById("inputs_fbID").appendChild(inputE_fb);

}
function removerInputsFB(tam_fb)
{

    for(let i = 0; i < tam_fb; i++){
        let input_fb = document.getElementById(i.toString()+"fb");
        console.log(i.toString()+"fb");
        document.getElementById(i.toString()+"fb").remove();
        input_fb.removeAttribute('id');
        console.log("id: " + i);
    }
}

function arregloCadenasFB()
{
    for(let i = 0; i < tamG_fb; i++)
    {    cadenas_fb[i] = document.getElementById(i.toString()+"fb").value;
            console.log(cadenas_fb[i]);
    }
}
