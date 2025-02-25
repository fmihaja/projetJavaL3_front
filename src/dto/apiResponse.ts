import { Product } from "./Product";
import { StockMovement } from "./StockMovement";

export interface apiResponse {
    msg: string|null;
    data: Product[] | Product | StockMovement | StockMovement[] | StockMovementSummary |null;
}