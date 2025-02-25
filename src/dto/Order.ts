import { Article } from "./Article";

export interface Order{
    orderId?: number;
    orderDate?: string[];
    articles?: Article[];
}