/*
function saludar(nombre){
    return `Hola ${nombre}`;
}
*/

const saludar = (nombre) => `Hola ${nombre}`;

console.log(saludar('Alejandro'));

/* ----------------------------------------------------------*/

/*
function multiplicar(a, b){
    return a * b;
}
*/

const multiplicar = (a, b) => a * b;

console.log(multiplicar(3, 15))

/* ----------------------------------------------------------*/

/*
function crearAlumno(nombre, apellido, edad, materias){
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        materias: materias
    }
}
*/

const crearAlumno = (nombre, apellido, edad, materias) => ({ nombre, apellido, edad, materias })

console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))

/* ----------------------------------------------------------*/

/*
function devolverFecha(dd, mm, aaaa){
    return `Hoy es ${dd}/${mm}/${aaaa}`;
}
*/

const devolverFecha = (dd, mm, aaaa) => `Hoy es ${dd}/${mm}/${aaaa}`;

console.log(devolverFecha('10','09','2022'));
