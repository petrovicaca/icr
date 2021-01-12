export interface Candy {
    id: string;
    name: string;
    weight: number;
    price: number;
    picture: string;
    category: 'chocolate' | 'candies' | 'caramels' | 'sour candy';
    description: string;
    shipping: number;
    rating: number;
}
