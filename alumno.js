
const alumnos=[]

class Alumno{
    constructor(registro, nombre, apellido) {
        this.registro = registro;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cantidad = 0;
        this.total = 0;

    }
    promedio() {
        if (this.cantidad === 0) {
            return "-";
        } else {
            return this.total / this.cantidad;
        }
    }

    crearAlumno(registro,nombre,apellido){
        if(alumnos.some(alumno => alumno.registro === registro)){
            return("Alumno existente")
        }else{
            const nuevoAlumno= new Alumno(registro,nombre,apellido);
            alumnos.push(nuevoAlumno);
            localStorage.setItem("alumnos", JSON.stringify(alumnos));
            return("Alumno creado con exito")
        }
    }

    agregarNota(registro,nota){
        const alumno = alumnos.find(alumno => alumno.registro === registro);
        if (alumno) {
            alumno.cantidad++;
            alumno.total += nota;
            return("Nota agregada con exito")
        }else{
            return("Número de alumno inválido.");
        }
    }

    verPromedio(registro){
        const alumno = alumnos.find(alumno => alumno.registro === registro);
        if (alumno) {
            return alumno.promedio();
        }else{
            return("Número de alumno inválido.");
        }
    }

    mostrarMensaje(mensaje){
        output.innerHTML = mensaje;
    }
}