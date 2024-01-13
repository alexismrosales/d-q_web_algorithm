var arr = [];
function PrefijoComun(s1,s2)
{
    let resultado = '';
    let i = 0;
    let n = s1.length;
    
    if(s2.length < n)
        n = s2.length;
    
    while(i < n && s1[i] == s2[i])
    {
        resultado += s1[i];
        i++; 
    }
    if(resultado == '')
        return '-1'
    return resultado;
}
function PrefijoComunMasLargo(arr,inicio, final)
{
    if(inicio == final)
        return arr[final];
    let mitad = Math.floor(inicio + (final - inicio) / 2);
    let s1 = PrefijoComunMasLargo(arr,inicio,mitad);
    let s2 = PrefijoComunMasLargo(arr,mitad+1,final);
    return PrefijoComun(s1,s2);
}