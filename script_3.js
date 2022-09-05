import { obtenerPcias, obtenerDptos, obtenerLocalidades } from "./libs/funciones-exportadas.js"

// Funcion para obtener todos los datos
const consultarDatos = async () => {
    const provincias = await obtenerPcias(),
    dptos = await obtenerDptos(),
    localidades = await obtenerLocalidades();

    console.log(provincias);
    console.log(dptos);
    console.log(localidades);
}

consultarDatos();
