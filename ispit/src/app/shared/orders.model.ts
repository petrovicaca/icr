export interface Order {
  items: Array<String>;
  price: number;
  status: 'in progress' | 'finished' | 'canceled';
}
