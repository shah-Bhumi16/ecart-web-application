import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from './product';
//import { Login } from './login';

@Injectable()
export class ProductService{
  static getProduct() {
    throw new Error('Method not implemented.');
  }
    constructor(private _httpService: Http){}


    getProduct() : Observable<Product[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._httpService.post("http://localhost:8080/ecart/api/productList", options)
                   .map((res:Response)=>res.json());
        
    }
    
    //  getProductsearch(product: Product) : Observable<Product[]>{
    //      let body = JSON.parse(JSON.stringify(product))
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this._httpService.post("http://localhost:8080/ecart/api/product/searchproduct", body, options)
    //                .map((res:Response)=>res.json());
        
    // }
    

    // getProductsearch(product: Product){
    //     let body = JSON.parse(JSON.stringify(product))
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this._httpService.post("http://localhost:8080/ecart/api/product/searchproduct", body, options) 
    // }
    
    private handleError(error: Response){
        return Observable.throw(error);
    }
}
