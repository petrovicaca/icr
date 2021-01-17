import { Orders } from "./orders.model";

export class OrdersService {
    private orders : Orders [] = [
        { id: '1', status: 'in progress' },
        { id: '2', status: 'in progress' }
]

    getOrders() {
        return this.orders;
    }
}