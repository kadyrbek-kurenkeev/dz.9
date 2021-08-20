import Transport from "./transport";

export default class Ship extends Transport{
    bag;
    color;
    waterbag;
    constructor(bag,color,waterbag){
        super(bag,color,waterbag);
    }
    run(){
        console.log("Корабль");
        console.log("Корабль плывет");
    }
}
