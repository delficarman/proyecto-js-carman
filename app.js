const inputRegistro = document.getElementById('numeroRegistro');
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputNota = document.getElementById('nota');
const inputRegistroNota = document.getElementById('numeroRegistroNota');
const inputRegistroPromedio = document.getElementById('numeroRegistroPromedio');
const btnRegistrar = document.getElementById('registrar');
const btnAgregar = document.getElementById('agregar');
const btnConsultar = document.getElementById('consultar');
const formRegistrar = document.getElementById('form-registrar');
const formAgregarNota = document.getElementById('form-agregar-nota');
const formPromedio = document.getElementById('form-promedio');
const output = document.getElementById("output");
const persona = new Alumno();

btnRegistrar.addEventListener("click", function (event) {
    event.preventDefault();
    const registro = inputRegistro.value;
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const mensaje = persona.crearAlumno(registro, nombre, apellido);
    persona.mostrarMensaje(mensaje);
    formRegistrar.reset();
});

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    const registro = inputRegistroNota.value;
    const nota = parseFloat(inputNota.value);
    const mensaje = persona.agregarNota(registro, nota);
    persona.mostrarMensaje(mensaje);
    formAgregarNota.reset();
});

btnConsultar.addEventListener("click", function (event) {
    event.preventDefault();
    const registro = inputRegistroPromedio.value;
    const mensaje = persona.verPromedio(registro);
    persona.mostrarMensaje(mensaje);
    formPromedio.reset();
});
