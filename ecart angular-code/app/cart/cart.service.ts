import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Cart } from './cart';
@Injectable()
export class CartService{
    deleteCheckoutItem(cartItemId: any) {
      throw new Error('Method not implemented.');
    }
    constructor(private _httpService: Http){}

    getCart(userId): Observable<Cart>{
        console.log(userId)
        return this._httpService.get("http://localhost:8080/ecart/api/cartnew/".concat(userId))
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    deleteCartItem(cartItemId){
        console.log(cartItemId)
        return this._httpService.delete("http://localhost:8080/ecart/api/deleteCartItem/".concat(cartItemId));
    }

    updateCart(cart){
        console.log(cart)
        let body = JSON.parse(JSON.stringify(cart));
        console.log(body)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._httpService.post("http://localhost:8080/ecart/api/addToCart", body, options)
    }

    private handleError(error: Response){
        return Observable.throw(error);
    }
}