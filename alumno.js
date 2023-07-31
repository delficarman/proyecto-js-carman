
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
            this.mostrarMensajeMal("Alumno existente");
        }else{
            const nuevoAlumno= new Alumno(registro,nombre,apellido);
            alumnos.push(nuevoAlumno);
            localStorage.setItem("alumnos", JSON.stringify(alumnos));
            this.mostrarMensajeOk("Alumno creado con éxito");
        }
    }

    agregarNota(registro,nota){
        const alumno = alumnos.find(alumno => alumno.registro === registro);
        if (alumno) {
            alumno.cantidad++;
            alumno.total += nota;
            this.mostrarMensajeOk("Nota agregada con éxito");
        }else{
            this.mostrarMensajeMal("Número de alumno inválido.");
        }
    }

    verPromedio(registro){
        const alumno = alumnos.find(alumno => alumno.registro === registro);
        if (alumno) {
            this.mostrarMensajeOk(alumno.promedio());
        }else{
            this.mostrarMensajeMal("Número de alumno inválido");
        }
    }

    mostrarMensajeOk(mensaje){
        Swal.fire({
            icon: "success",
            title: mensaje,
        });
    }

    mostrarMensajeMal(mensaje){
        Swal.fire({
            icon: "warning",
            title: mensaje,
        });
    }
}