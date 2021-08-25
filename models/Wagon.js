class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passengersList = [];
    }

    getAvailableSeatCount (){
        return this.capacity - this.passengersList.length
    }

    join(traveler) {
        if(this.capacity - this.passengersList.length > 0){
            this.passengersList.push(traveler)
        }
    }

    shouldQuarantine(){
        let sickPassenger = false;
        this.passengersList.forEach((item)=>{
            if(item.isHealthy === false){
                sickPassenger = true
            }
        })
        return sickPassenger
    }

    totalFood(){
        let totalFood = this.passengersList.reduce((acc, atual)=>{
            return acc + atual.foodQt
        }, 0)
        return totalFood
    }
}


module.exports = Wagon;





