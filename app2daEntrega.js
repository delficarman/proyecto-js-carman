// function Persona(nombre, apellido){
//     this.nombre=nombre;
//     this.apellido=apellido;
//     this.cantidad=0;
//     this.total=0;
//     this.promedio= function(){
//         if(this.cantidad===0){
//             return "No se ha ingresado ninguna nota para este alumno";
//         }
//         return this.total/this.cantidad;
//     };
// }

// var alumnos=[]

// do{
//     opcion=prompt("Por favor seleccione una opción:\n1. Agregar alumno\n2. Ingresar nota\n3. Mostrar promedio\n4. Salir");
//     switch (parseInt(opcion)) {
//         case 1:
//             nombre = prompt("Ingrese el nombre del alumno:");
//             apellido = prompt("Ingrese el apellido del alumno:");
//             alumno = new Persona(nombre, apellido);
//             alumnos.push(alumno);
//             alert("Alumno agregado con éxito.");
//             break;
//         case 2:
//             numAlumno = parseInt(prompt("Ingrese el número de alumno (1-" + alumnos.length + "):"));
//             if (numAlumno >= 1 && numAlumno <= alumnos.length) {
//                 nota = parseFloat(prompt("Ingrese la nota:"));
//                 index = numAlumno - 1;
//                 alumnos[index].cantidad++;
//                 alumnos[index].total += nota;
//                 alert("Nota registrada con éxito.");
//             }else{
//                 alert("Número de alumno inválido.");
//             }
//             break;
//         case 3:
//             numAlumno = parseInt(prompt("Ingrese el número de alumno (1-" + alumnos.length + "):"));
//             if (numAlumno >= 1 && numAlumno <= alumnos.length) {
//                 index = numAlumno - 1;
//                 promedio = alumnos[index].promedio();
//                 alert("Promedio del alumno " + numAlumno + ": " + promedio);
//             }else{
//                 alert("Número de alumno inválido.");
//             }
//             break;
//         case 4:
//             break;
//         default:
//             alert("Opción inválida.");
//     }
// }while(parseInt(opcion) !== 4);

function buscarAlumno(nombre, apellido) {
    alumnoEncontrado = alumnos.find(function(alumno) {
        return alumno.nombre.toLowerCase() === nombre.toLowerCase() && alumno.apellido.toLowerCase() === apellido.toLowerCase();
    });
    if (alumnoEncontrado) {
        return alumnoEncontrado.promedio();
    }else{
      return -1; // Retorna -1 si el alumno no se encuentra en la lista
    }
};

nombreBusqueda = prompt("Ingrese el nombre del alumno a buscar:");
apellidoBusqueda = prompt("Ingrese el apellido del alumno a buscar:");
promedioAlumno = buscarAlumno(nombreBusqueda, apellidoBusqueda);

if(promedioAlumno !== -1) {
    alert("El promedio del alumno " + nombreBusqueda + " " + apellidoBusqueda + " es: " + promedioAlumno);
}else{
    alert("El alumno " + nombreBusqueda + " " + apellidoBusqueda + " no se encuentra en la lista de alumnos.");
};

///Calculo de nota final de alumnos ingresados
/*let cantidad1=0;
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
}while(alumno!=="basta");*/