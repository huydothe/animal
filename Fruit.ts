import {IEdible} from "./Edible";

export abstract class Fruit implements IEdible{
    abstract howtoEat():string;
}