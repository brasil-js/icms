var matriz = require('./matriz');

module.exports = function icms(ufDeOrigem, ufDeDestino) {
    if(typeof ufDeDestino === 'undefined') {
        ufDeDestino = ufDeOrigem;
    }

    return matriz[ufDeOrigem] && matriz[ufDeOrigem][ufDeDestino];
}