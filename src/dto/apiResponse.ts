import { Client } from "./Client";

export interface apiResponse {
    msg: string|null;
    data: Client | Client[] | null;
}