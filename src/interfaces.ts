
interface ICar {
    brand: string;
    year: number;
    isElectric: boolean;
    color: string;
    price: number;
}

let cars: ICar[] = [];

let car1: ICar = {
    brand: "BMW",
    year: 2012,
    isElectric: false,
    color: "black",
    price: 2500
};

let car2: ICar = {
    brand: "OPEL",
    year: 2013,
    isElectric: false,
    color: "black",
    price: 2000
};

cars.push(car1, car2);


let expensiveCars = cars.filter(car => car.price > 2000);
console.log(expensiveCars);

cars[0].color = "red"
console.log(cars);

const myOpel = cars.find(car => car.brand === "OPEL");
console.log(myOpel);

