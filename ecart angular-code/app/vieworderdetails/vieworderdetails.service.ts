import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { VieworderdetailsComponent } from './vieworderdetails.component';
import { Vieworderdetails } from './vieworderdetails';

@Injectable()
export class VieworderdetailsService{
    constructor(private _httpService: Http){}


    getOrders(userId: string): Observable<Vieworderdetails[]>{
       console.log(userId);
        return this._httpService.get("http://localhost:8080/ecart/api/vieworderdetails/".concat(userId))
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

 private handleError(error: Response){
        return Observable.throw(error);
    }

}