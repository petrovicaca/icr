import { Candy } from "./candy.model";

export interface Cart {
    name: string;
    candy: Array<Candy>;
}
