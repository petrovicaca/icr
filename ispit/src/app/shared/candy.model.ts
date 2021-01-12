export interface Candy {
    id: string;
    name: string;
    weight: number;
    price: number;
    picture: string;
    type: 'chocolate' | 'candies' | 'caramels' | 'sour candy';
}
