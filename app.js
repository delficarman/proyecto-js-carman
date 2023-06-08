///Calculo de nota final de alumnos ingresados
cantidad1=0;
cantidad2=0;
cantidad3=0;
total1=0;
total2=0;
total3=0;

function promedio(total,cantidad){
    return total/cantidad
}

while(alumno<=3){
    alumno=parseInt(prompt("Por favor seleccione el número de alumno para el cual desea cargar una nota. Puede repetir el proceso cuantas veces quiera, siempre y cuando no ingrese un número mayor a 3. Luego de agregar cada nota, se le mostrará el promedio del alumno." + "\n" + "Alumno 1: Delfina Carman"+ "\n" + "Alumno 2: Antonio Lopez"+ "\n" +"Alumno 3: Sofia Molina"))
    switch(alumno){
        case 1:
            nota1=parseFloat(prompt("Por favor ingrese la nota:"))
            cantidad1++
            total1=total1+nota1
            return "Promedio alumno 1:" + promedio(total1,cantidad1)
        case 2:
            nota2=parseFloat(prompt("Por favor ingrese la nota:"))
            cantidad2++
            total2=total1+nota1
            return "Promedio alumno 2:" + promedio(total2,cantidad2)
        case 3:
            nota3=parseFloat(prompt("Por favor ingrese la nota:"))
            cantidad3++
            total3=total1+nota1
            return "Promedio alumno 3:" + promedio(total3,cantidad3)
        default:
            alert("No ha ingresado un alumno existente")
    }
        

    }
}