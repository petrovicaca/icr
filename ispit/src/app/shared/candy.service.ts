import { getLocaleCurrencyCode } from "@angular/common";
import { Candy } from "./candy.model";

export class CandyService {
    private candies: Candy [] = [
        { id: '1', name: 'Chocolate candy 1', weight: '10 gr', calories: '24 cal', picture: " ", type: 'chocolate' },
        { id: '2', name: 'Chocolate candy 2', weight: '20 gr', calories: '25 cal', picture: " ", type: 'chocolate' },
        { id: '3', name: 'Chocolate candy 3', weight: '30 gr', calories: '26 cal', picture: " ", type: 'chocolate' },
        { id: '4', name: 'Chocolate candy 4', weight: '40 gr', calories: '27 cal', picture: " ", type: 'chocolate' },
        { id: '5', name: 'Chocolate candy 5', weight: '50 gr', calories: '28 cal', picture: " ", type: 'chocolate' }
    ]

    getCandy() {
        return this.candies;
    }
}