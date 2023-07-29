/*
{
    "id": "GSM-1",
    "unixTime": "1034268516",
    "payload_length": 9,
    "payload":"0xC0560D72DA4AB2445A"
}
*/
const verificarMensaje = (mensaje) => {
    if (!mensaje.id) {
        throw new Error("Falta campo ID del mensaje.");
    }

    if (!mensaje.unixTime) {
        throw new Error("Falta campo unixTime del mensaje.");
    }

    if (!mensaje.payload_length) {
        throw new Error("Falta campo longitud del mensaje.");
    }

    if (!mensaje.payload) {
        throw new Error("Falta campo payload del mensaje.");
    }
    return true;
};

//Lee los datos de Firebase para saber como analizar cada uno de los mensajes que vienen en la trama de entrada, se arma un objeto con la informacion necesaria para saber donde almacenar dicha informacion y los datos propieamente dichos y se devuelve.

const procesarTrama = (mensaje) => [
    //TO DO
    //Leer dase de datos de dispositivos
    //Por cada Trama en "datos", separar los distintos mensajes que vienen
    //Para cada mensajes identificado en cada trama trasnformar el valor binario en decimal y dejarlo listo para almacenar
    //devolver una estructura con la informacion anterior para que pueda ser almacenada
];

const almacenarDatos = (datos) => [
    //TO DO
];

module.exports = { verificarMensaje, procesarTrama, almacenarDatos };
