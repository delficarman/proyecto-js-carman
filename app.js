///Calculo de nota final de alumnos ingresados
let cantidad1=0;
let cantidad2=0;
let cantidad3=0;
let total1=0;
let total2=0;
let total3=0;

function promedio(total,cantidad){
    return total/cantidad
}
do{
    alumno=(prompt("Por favor seleccione el número de alumno para el cual desea cargar una nota. Puede repetir el proceso cuantas veces quiera. Luego de agregar cada nota, se le mostrará el promedio del alumno. Ingrese basta para terminar. " + "\n" + "Alumno 1: Delfina Carman"+ "\n" + "Alumno 2: Antonio Lopez"+ "\n" +"Alumno 3: Sofia Molina"));
    if(alumno=="basta"){
        break;
    }
    switch(parseInt(alumno)){
        case 1:
            nota1=parseFloat(prompt("Por favor ingrese la nota:"));
            cantidad1++;
            total1=total1+nota1;
            alert("Promedio alumno 1:" + promedio(total1,cantidad1));
            break;

            case 2:
            nota2=parseFloat(prompt("Por favor ingrese la nota:"));
            cantidad2++;
            total2=total2+nota2;
            alert("Promedio alumno 2:" + promedio(total2,cantidad2));
            break;

            case 3:
            nota3=parseFloat(prompt("Por favor ingrese la nota:"));
            cantidad3++;
            total3=total3+nota3;
            alert("Promedio alumno 3:" + promedio(total3,cantidad3));
            break;

            default:
                    alumno=(prompt("No ha ingresado un alumno existente. Ingrese otro numero o escriba basta para terminar:"));
                
    }
}while(alumno!=="basta");