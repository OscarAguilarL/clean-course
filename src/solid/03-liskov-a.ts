import { Tesla, Audi, Toyota, Honda, Vehiculo } from './03-liskov-b';

(() => {

    const printCarSeats = (cars: Vehiculo[]) => {

        cars.forEach(car => {
            console.log(car.constructor.name, car.getNumberOfSeats());
        });
    };

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];

    printCarSeats(cars);

})();
