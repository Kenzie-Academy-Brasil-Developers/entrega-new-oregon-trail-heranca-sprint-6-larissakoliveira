const Traveler = require('./Traveler')

class Doctor extends Traveler{
    constructor(nome){
        super(nome)        
    }
    heal(viajante){
        viajante.isHealthy = true
    }
}

module.exports = Doctor;
