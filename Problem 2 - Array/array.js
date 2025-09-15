var cars=["Toyota", "Ford", "Kia", "Hyundai"];
console.log(cars)


cars.push("ADDED")
console.log(cars)

cars.shift()
console.log(cars)

cars.unshift("Toyota")
console.log(cars)

cars[1]="FORD"
console.log(cars)

for (let index = 0; index < 10; index++) {
    cars.push("-");
    
}
console.log(cars)