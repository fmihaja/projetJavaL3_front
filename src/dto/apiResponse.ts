import { Product } from "./Product";

export interface apiResponse {
    msg: string|null;
    data: Product[]|Product|null;
}