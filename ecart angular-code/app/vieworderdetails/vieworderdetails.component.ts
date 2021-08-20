import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductComponent } from 'app/product/product.component';
import { Vieworderdetails } from './vieworderdetails';
import { VieworderdetailsService } from './vieworderdetails.service';

@Component({
  selector: 'app-vieworderdetails',
  templateUrl: './vieworderdetails.component.html',
  styleUrls: ['./vieworderdetails.component.css']
})

export class VieworderdetailsComponent{

//vieworderdetail= new Vieworderdetails();
  vieworderdetails: Vieworderdetails[];
  userId = JSON.parse(localStorage.getItem("user")).id;
  constructor(private router: Router, private vieworderdetailsService: VieworderdetailsService, public pc:ProductComponent) { }

  ngOnInit() {
    //console.log(this.userId);
      if(localStorage.length <= 0){
      this.router.navigate(['']);  
      
  }
  this.getOrdersnew(); 
}
  getOrdersnew() {
    console.log(this.userId);
    this.vieworderdetailsService.getOrders(this.userId).subscribe((response)=>{this.vieworderdetails = response, console.log(this.vieworderdetails)});
  }


}

