import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Register } from './register';
import { Login } from 'app/login/login';
import { Product } from 'app/product/product';
import { LoginService } from 'app/login/login.service';

@Injectable()
export class RegisterService{
    constructor(private _httpService: Http, private _loginService: LoginService){}

    getAllRegisters(): Observable<Register[]>{
       console.log("getallregisters") 
        return this._httpService.get("http://localhost:8080/ecart/api/registration")
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }
    addRegister(register: Register){
        console.log("addRegister")
        let body = JSON.parse(JSON.stringify(register));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
                   return this._httpService.post("http://localhost:8080/ecart/api/registration", body, options);
        
    }
     
    
    private handleError(error: Response){
        return Observable.throw(error);
    }
}