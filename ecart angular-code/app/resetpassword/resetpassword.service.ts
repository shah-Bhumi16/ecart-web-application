import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Login } from 'app/login/login';
import { Product } from 'app/product/product';
import { Forgetpassword } from 'app/forgetpassword/forgetpassword';
import { Register } from 'app/register/register';
import { LoginService } from 'app/login/login.service';
import {Resetpassword} from './resetpassword';


@Injectable()
export class ResetpasswordService{
    constructor(private _httpService: Http){}

resetpassword(resetpassword: Resetpassword){
        let body = JSON.parse(JSON.stringify(resetpassword));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._httpService.post("http://localhost:8080/ecart/api/registration/resetpassword", body, options)
                   .map((res:Response)=>res.json());
}
private handleError(error: Response){
        return Observable.throw(error);
    }


}