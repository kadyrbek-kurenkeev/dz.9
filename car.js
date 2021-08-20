import Transport from "./transport";

export default class Car extends Transport{
    bag;
    color;
    wheel;
    constructor(bag,color,wheel){
        super(bag,color,wheel);
    }
    run(){
        super.run();
        console.log("Машина");
        console.log("Машина едет");
    }
}
