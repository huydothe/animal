import {IEdible} from "./Edible";
import {Animal} from "./Animal";

class Chicken extends Animal implements IEdible {
    howtoEat(): string {
        return `Ăn thóc`;
    }
    makeSound(): string {
        return `Ò ó o `;
    }
}