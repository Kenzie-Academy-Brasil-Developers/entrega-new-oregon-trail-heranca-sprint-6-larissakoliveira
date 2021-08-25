const Traveler = require('./Traveler')

class Hunter extends Traveler{
    constructor(nome){
        super(nome)
        this.foodQt = 2
    }
    hunt(){
        this.foodQt += 5
    }

    eat(){
        if(this.foodQt > 1){
            this.foodQt -= 2
        }
        else if(this.foodQt === 1){
            this.foodQt -= 1
            this.isHealthy = false
        }
        else if(this.foodQt === 0){
            this.isHealthy = false
        }
    }

    giveFood(traveler, numOfFoodUnits){
        if(numOfFoodUnits > this.foodQt){
            return false
        }else{
        return this.foodQt -= numOfFoodUnits
        }
}
}
module.exports = Hunter;