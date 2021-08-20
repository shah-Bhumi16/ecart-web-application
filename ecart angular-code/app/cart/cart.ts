import { Register } from "app/register/register";
import { CartItem } from "./cartitem";

export class Cart{
    id: number;
    status: number;
    //r_id: number;
    registration: Register = new Register();
    cartItem: CartItem[];
}