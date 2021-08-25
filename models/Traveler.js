class Traveler {
    constructor(name){
        this.name = name;
        this.foodQt = 1;
        this.isHealthy = true;
    }

    hunt(){
        this.foodQt += 2
    }
    
    eat(){
        if(this.foodQt > 0){
            this.foodQt -= 1
        }
        else{
            this.isHealthy = false
        }
    }
}


module.exports = Traveler;






