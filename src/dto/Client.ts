import { Order } from "./Order";

export interface Client {
    email?: string;
    name?: string;
    firstName?: string;
    orders?: Order[];
}