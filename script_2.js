// Promesa almacenada en una constante
const promesa = () => new Promise((resolve, reject) => (10 === 11) ? resolve('Los valores son iguales') : reject('Los valores son distintos'));

promesa()
    .then((res) => console.log(res))
    .catch((error) => console.error(error));

/* ----------------------------------------------------------*/

const promesaDos = (provincia) => new Promise((resolve, reject) => {
    ('Formosa' === provincia) ? resolve('Usted está ubicado en Formosa') : reject('Error al realizar la consulta');
});

promesaDos("Formosa")
    .then((res) => console.log(res))
    .catch((error) => console.error(error));

/* ----------------------------------------------------------*/

const promesaTres = (valorBooleano) => new Promise((resolve, reject)=> {
    (true === valorBooleano)
        ? resolve('Los valores son iguales #2')
        : reject('Los valores son distintos #2');
})

promesaTres(true)
    .then((res) => console.log(res))
    .catch((error) => console.error(error));

/* ----------------------------------------------------------*/

const promesaCuatro = async (arguments) => await new Promise((resolve, reject)=> {
    (true === arguments)
        ? resolve('Los valores son iguales #3')
        : reject('Los valores son distintos #3')
})

promesaCuatro()
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
