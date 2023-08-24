/* Bind function is used to get the specfic attribute or method of a function */
this.car = 'Suzuki';

let garage = {
    car:"Mercedes",
    getCar:function(){
        return this.car
    }
}
console.log(garage.getCar())
let storeForLater = garage.getCar;
console.log(storeForLater())

// To avoid the above problem we should use the bind function.

let theRealCar = garage.getCar.bind(garage);
console.log(theRealCar())