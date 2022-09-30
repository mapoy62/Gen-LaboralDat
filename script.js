// Declaración de elementos de html
let dias = document.querySelector('#dias');
let dia = document.querySelector('#dia');
let meses = document.querySelector('#meses');
let mes = document.querySelector('#mes');
let anios = document.querySelector('#anios');
let anio = document.querySelector('#anio');
let btnCalcula = document.querySelector('#calcula');
let dayType = document.querySelector('#DayType');
let AnioBisiesto = document.querySelector('#bisiesto');
let htmlDias = "";
let htmlMeses = "";
let htmlAnios = "";

// Ciclos para desplegar opciones de día, mes y año
for (let i = 1; i < 32; i++) {
    htmlDias += `<option value="${i}"></option>`;
    dias.innerHTML=htmlDias;
}

for (let i = 1; i < 13; i++) {
    htmlMeses += `<option value="${i}"></option>`;
    meses.innerHTML=htmlMeses;
}

for (let i = 1950; i < 2051; i++) {
    htmlAnios += `<option value="${i}"></option>`;
    anios.innerHTML=htmlAnios;
}

//Función de año bisiesto
function AnBisiesto(anioB){
    let bisiesto = 1952;
    let bisiestos = [];
    do{
        bisiestos.push(bisiesto);
        bisiesto+=4;
    }while(bisiesto <= 2050);

    for (let i = 0; i < bisiestos.length; i++)
        if(anioB == bisiestos[i])
            return true;
    return false;

}

//Salida - Impresión de tipo de día
function diaLab(day){
        switch(day){
        case 0:
            dayType.innerText = "Domingo, día NO laborable";
            break;
        case 1:
            dayType.innerText = "Lunes, día laborable";
            break;
        case 2:
            dayType.innerText = "Martes, día laborable";
            break;
        case 3:
            dayType.innerText = "Miércoles, día laborable";
            break;
        case 4:
            dayType.innerText = "Jueves, día laborable";
            break;
        case 5:
            dayType.innerText = "Viernes, día laborable";
            break;
        case 6:
            dayType.innerText = "Sábado, día NO laborable";
            break;
        default:
            dayType.innerText = "Fecha no válida. Intenta de nuevo :)";
    }
}

 //MainFunction - Verificación de campos y llamados a función de salida
btnCalcula.addEventListener('click', ()=>{
    let str = mes.value +" "+ dia.value +" "+ anio.value;
    let date = new Date(str);
    let day = date.getDay();
    let BisiestoY = false;
    BisiestoY = AnBisiesto(anio.value);

    if(dia.value == " " || mes.value == " " || anio.value == "")
        dayType.innerText = "Por favor, llena todos los campos. :)";
    else
        if((dia.value >= 29 && mes.value==2 && BisiestoY == false) || (dia.value == 31 && (mes.value == 4 || mes.value == 6 || mes.value == 9 || mes.value == 11)))
            dayType.innerText = "Día no válido. Intenta de nuevo :)";
        else{
            if(BisiestoY){
                AnioBisiesto.innerText = "Año bisiesto";
                diaLab(day);
            }else{
                AnioBisiesto.innerText = "Año NO bisiesto";
                diaLab(day);
        }
    }
});







