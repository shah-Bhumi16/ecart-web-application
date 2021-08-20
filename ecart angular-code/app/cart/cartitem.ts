import { Product } from "app/product/product";

export class CartItem {
    id: number;
    finalPrice: number;
    quantity: number;
    product: Product = new Product();
    maxcartqty: number;
    alerts: String;
}