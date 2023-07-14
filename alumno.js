alumnos=[]

class Alumno{
    constructor(registro, nombre, apellido) {
        this.registro = registro;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cantidad = 0;
        this.total = 0;
        this.promedio= function(){
            if(this.cantidad===0){
                return "-";
            }else{
                return this.total/this.cantidad;
            } 
        };
    }

    crearAlumno(registro,nombre,apellido){
        if(alumnos.includes(registro)){
            return("Alumno existente")
        }else{
            const nuevoAlumno= new Alumno(registro,nombre,apellido);
            alumnos.push(nuevoAlumno);
            return("Alumno creado con exito")
        }
    }

    agregarNota(registro,nota){
        if (alumnos.includes(registro)) {
            alumnos[alumnos.indexof(registro)].cantidad++;
            alumnos[alumnos.indexof(registro)].total += nota;
            return("Nota agregada con exito")
        }else{
            return("Número de alumno inválido.");
        }
    }

    verPromedio(registro){
        if (alumnos.includes(registro)) {
            return promedio = alumnos[alumnos.indexof(registro)].promedio();
        }else{
            return("Número de alumno inválido.");
        }
    }
}