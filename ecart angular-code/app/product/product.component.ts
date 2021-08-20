import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from './product';
import { Router } from '@angular/router';
import { ViewproductService } from 'app/viewproduct/viewproduct.service';
import { ProductService } from './product.servise';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  constructor(private viewProductService: ViewproductService, private router: Router, private productService: ProductService) { }

  products: Product[];
  product=new Product(); 
  userName: String;
  id: string;
  userId: number;
  category: string;
  filterString: string = null;
  value = [];
  
  ngOnInit() {
    // if(localStorage.length <= 0){
    //   this.router.navigate(['']); 
    // }
     this.getAllProduct();
     
    this.userName = JSON.parse(localStorage.getItem("user")).name;

    //console.log(this.userName);
    //this.displayProducts();
    //this.search();
    
  }

  getAllProduct() {
    this.productService.getProduct().subscribe((response) => {this.products = response, console.log(this.products)}); 
  }

  getTableProducts(products){
    this.value = [];
    if(this.filterString == null || this.filterString == ''){

      return this.products;
    }
    // else{
    //   return this.products;
    // }
    else if(this.filterString != null){
      for(let item of products){
        if(item.name == this.filterString){
          this.value.push(item)
          return this.value;
          
        }
       
      }
    }
    //let abc = this.products.filter(item => (((this.filterString != '') && (item?.name == this.filterString)) || (this.filterString == '')));
  }

  // getAllProductsearch() {
  //   this.productService.getProductsearch(this.product).subscribe((response) => {this.products = response, console.log(response)});
  // //  this.products = response.json();
  // }

  displayProducts(){
  }

//  search(){
//    this.productService.getProduct().subscribe((response) => {this.products = response, console.log(this.products)}); 
//    filter:this.filterString;
//  }


  addViewproduct(id): void{
       this.router.navigate(['/viewproduct', id]); 
  }

  
  home() {
    this.router.navigate(['/productList']); 
  }
  login() {
    this.router.navigate(['']); 
  }
  cart(){
    this.router.navigate(['getCart']);
  }
  logout(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.router.navigate(['']);
  }

  getordersnew(){
    this.router.navigate(['/vieworderdetails']);
  }

}

// if(localStorage.getItem("id") == null){
    //   this.router.navigate(['']);
    // }

    // addViewproductsearch(category): void{
//        this.router.navigate(['/viewproduct', category]); 
//   }