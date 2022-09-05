const apis = {
    provincias: "https://apis.datos.gob.ar/georef/api/provincias",
    departamentos: "https://apis.datos.gob.ar/georef/api/departamentos",
    localidades: "https://apis.datos.gob.ar/georef/api/localidades"
}

const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
const obtenerPcias = async () => {
    await retrasar(1800);

    return await fetch(apis.provincias)
        .then((res) => res.json())
        .catch((error) => error);
}

// Función que retorna los datos de departamentos
const obtenerDptos = async () => {
    await retrasar(1391);

    return await fetch(apis.departamentos)
        .then((res) => res.json())
        .catch((error) => error);
}

// Función que retorna los datos de localidades
const obtenerLocalidades = async () =>{
    await retrasar(900);

    return await fetch(apis.localidades)
        .then((res) => res.json())
        .catch((error) => error);
}

export {
    obtenerPcias,
    obtenerDptos,
    obtenerLocalidades
}