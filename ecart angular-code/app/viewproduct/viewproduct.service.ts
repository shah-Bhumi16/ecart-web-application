import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from 'app/product/product';
import { Cart } from 'app/cart/cart';
import { NgIf } from '@angular/common';


@Injectable()
export class ViewproductService{
    constructor(private _httpService: Http){}

    addViewproduct(id) : Observable<Product>{
        
        return this._httpService.get("http://localhost:8080/ecart/api/product/".concat(id))
                   .map((res:Response)=>res.json())
                   .catch(this.handleError);

        
    }

    // addViewproductsearch(category) : Observable<Product>{
        
    //     return this._httpService.get("http://localhost:8080/ecart/api/product/".concat(category))
    //                .map((res:Response)=>res.json())
    //                .catch(this.handleError);
  
    // }

    addProductToCart(cart){
     
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
    
    
    