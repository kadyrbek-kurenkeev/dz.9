
import Transport from "./transport";

export default class Plane extends Transport{
    bag;
    color;
    wing;
    constructor(bag,color,wing){
        super(bag,color,wing);
    }
    run(){
        console.log("Самолет");
        console.log("Самолет летит");
    }
}
