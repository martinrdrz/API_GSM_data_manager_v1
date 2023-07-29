const { response, request } = require("express");
const service = require("../services/messages.service");
//const service = require("../services");
const dto = require("../dto/dto");

const createMessage = (req = request, res = response) => {
    let mensaje = req.body;
    try {
        service.verificarMensaje(mensaje);
        //res.header("Content-Type", "text/xml");
        //res.status(200).send(dto.resultXML(result));
        res.status(200).json(dto.ok("data OK."));
        //let datos = service.procesarTrama(mensaje);
        //let result_2 = service.almacenarDatos(datos);
    } catch (error) {
        return res.status(400).json(dto.error(error.message));
    }
};

module.exports = { createMessage };
