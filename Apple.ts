import {Fruit} from "./Fruit";

class Apple extends Fruit {
    howtoEat(): string {
        return ` Gọt vỏ mà ăn `;
    }
}

let apple= new Apple();
console.log(apple.howtoEat())