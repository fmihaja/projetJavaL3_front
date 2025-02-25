import { Product } from "./Product";

export interface StockMovement {
    id?: number;
    date?: Date;
    quantite: number;
    type: string;
    produit: Product
}