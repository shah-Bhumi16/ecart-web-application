import { Component, Input, OnInit } from '@angular/core';

import {ViewproductService} from './viewproduct.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/product/product';
import { Cart } from 'app/cart/cart';
import { CartService } from 'app/cart/cart.service';
import { CartItem } from 'app/cart/cartitem';
import { ProductComponent } from 'app/product/product.component';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})

export class ViewproductComponent implements OnInit {
  id: number;
  item: Product;
  cart: Cart;
  cartItem : CartItem;
  max: number;
  product: Product;
  userName: String;
  constructor(private _viewproductService: ViewproductService, private router: Router, private route: ActivatedRoute, 
    private pc:ProductComponent, private cartService: CartService) {
    this.cart = new Cart();
    this.cartItem = new CartItem();
  }
  ngOnInit() {
    if(localStorage.length <= 0){
      this.router.navigate(['']); 
    }
   this.addItem();
  this.userName = JSON.parse(localStorage.getItem("user")).name;
    
    console.log(this.userName);
   
  }
  getAllProduct() {
    throw new Error('Method not implemented.');
  }

  addItem(): void{
      this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this._viewproductService.addViewproduct(this.id)
    .subscribe((response)=>{
      this.item = response;
      this.product = response;
      console.log(this.item);
      if(this.item.quantity<10){
        this.max=this.item.quantity;
      }
      else{
        this.max=10;
      }});
    }

    addViewProduct(id): void{
      this.cart.registration.id = JSON.parse(localStorage.getItem("user")).id;
      this.cartService.getCart(this.cart.registration.id).subscribe((response)=>{
      let cartItems = response.cartItem;
      for(let cartItem of cartItems) {
        if(id === cartItem.product.id) {
            alert("Product is already added into the cart.You can change the quantity from cart");
            this.router.navigate(['/addToCart']);
            return;
        }
      }
      this.cart.status = 1;
      this.cartItem.finalPrice = this.item.price * this.cartItem.quantity;
      this.cartItem.product = this.product;

      this.cart.cartItem = new Array();
      this.cart.cartItem.push(this.cartItem);
      console.log("JSON.stringify(this.cart)")
      console.log(JSON.stringify(this.cart))
     
      this._viewproductService.addProductToCart(this.cart).subscribe((response) => {
          alert("Your product is sucessfully added into cart");
              console.log(response);
              this.router.navigate(['/addToCart']);
            }, (error) =>{
                console.log(error)
            });  
    
      });   
      }
      
}



