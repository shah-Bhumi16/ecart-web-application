import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Register } from 'app/register/register';
import { Cart } from 'app/cart/cart';
import { CartService } from 'app/cart/cart.service';
import { CartItem } from 'app/cart/cartitem';
import { Checkout } from './checkout';
@Injectable()
export class CheckoutService{
    router: any;
    deleteCheckoutItem(cartItemId: any) {
      throw new Error('Method not implemented.');
    }
    constructor(private _httpService: Http){}

    getUser(id) : Observable<Register>{
            
            return this._httpService.get("http://localhost:8080/ecart/api/registration/".concat(id))
                    .map((res:Response)=>res.json())
                    .catch(this.handleError);
    }
    
    getCart(userId): Observable<Cart>{
        console.log(userId)
        return this._httpService.get("http://localhost:8080/ecart/api/cartnew/".concat(userId))
             .map((response: Response) => response.json())
                .catch(this.handleError);
    }

  placeorder(cart: Cart){
        console.log("checkout")
        let body = JSON.parse(JSON.stringify(cart));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //alert("Your order has been sucessfully placed...!Continue shopping Thank you! ")
        return this._httpService.post("http://localhost:8080/ecart/api/sendemail", body, options);
        
    }


    deleteCartItem(cartItemId){
        console.log(cartItemId)
        return this._httpService.delete("http://localhost:8080/ecart/api/deleteCartItem/".concat(cartItemId));
    }
    
    redirect() {
    this.router.navigate(['/productList']); 
  }

    private handleError(error: Response){
        return Observable.throw(error);
    }
}