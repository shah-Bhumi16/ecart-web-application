import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Login } from './login';
import { Product } from 'app/product/product';

@Injectable()
export class LoginService{
    constructor(private _httpService: Http){}


    addLogin(login: Login) : Observable<Product[]>{
        let body = JSON.parse(JSON.stringify(login));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._httpService.post("http://localhost:8080/ecart/api/registration/login", body, options)
                   .map((res:Response)=>res.json());
        
    }
     
    private handleError(error: Response){
        return Observable.throw(error);
    }
}