import { StockMovement } from "./StockMovement";

export interface Product {
    id: number;
    name: string;
    price: number;
    quantite: number;
    stockMovements?: StockMovement[];
}