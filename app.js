import Transport from "./Modules/transport";
import Car from "./Modules/car";
import Plane from "./Modules/plane";
import Ship from "./Modules/ship";

const car = new Car("20L","Red","4");
const ship = new Ship("200L","Blue","800L")
const plane = new Plane("100L","White","150m");

car.run();
ship.run();
plane.run();








