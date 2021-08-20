import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'app/register/register';
import { Cart } from 'app/cart/cart';
import { CartService } from 'app/cart/cart.service';
import { CartItem } from 'app/cart/cartitem';
import { CheckoutService } from './checkout.service';
import { Checkout } from './checkout';
import { ProductComponent } from 'app/product/product.component';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: Cart;
  register: Register;
  checkouts: Checkout[];
  checkout=new Checkout();
  userName: String;
  //cartItem : CartItem;;
  
  id: number;
   products: CartItem[];
   subtotal: number = 0;
   flag: number;
   alerts: string;
  showbtn: boolean;
  userId: number;
   counter: number;
   maxcartqty: number;
  constructor(private _checkoutService: CheckoutService, private cartService: CartService, private router: Router, private route: ActivatedRoute, public pc:ProductComponent) { }

  ngOnInit() {
    
    if(localStorage.length <= 0){
      this.router.navigate(['']); 
    }
    let userId = JSON.parse(localStorage.getItem("user")).id;
    this._checkoutService.getUser(userId).subscribe((userdata)=>{
      this.register=userdata;
      console.log(this.register);
    });
    this.cartService.getCart(userId)
    .subscribe((response)=>{
      this.cart = response
      for(let cartItem of response.cartItem) {
        this.subtotal = this.subtotal + cartItem.finalPrice;
      }
      this.products = response.cartItem,console.log(this.cartService);
    });
    
  }

addCheckout(){
  let userId = JSON.parse(localStorage.getItem("user")).id;
    this._checkoutService.getCart(userId)
    .subscribe((response)=>{
      this.subtotal = 0;
      this.counter =0;
      this.flag=0;
      for(let cartItem of response.cartItem) {
        this.subtotal = this.subtotal + cartItem.finalPrice;
        
        cartItem.maxcartqty=this.min(10, cartItem.product.quantity);
        console.log(cartItem.product.quantity);
        console.log(cartItem.quantity);
        if(cartItem.quantity>cartItem.product.quantity){
          this.alerts="only "+ cartItem.product.quantity+ " quantity is available.";
          cartItem.alerts=this.alerts;
          this.showbtn=true;
          this.flag ++;
        }
      }

    if(this.flag == 0){
        console.log(this.products); 
        
        let registration = JSON.parse(localStorage.getItem("user"));
        this._checkoutService.placeorder(this.cart)
          .subscribe((response)=>{
            console.log("response")
            this.router.navigate(['/productList']);
          });
      }
      else{
        this.router.navigate(['/getCart']);
      } 

      this.products = response.cartItem,
      console.log(this.cartService);
    });
       
}
 deleteCartItem(cartItemId) {
    this.cartService.deleteCartItem(cartItemId)
    .subscribe((response)=>{
      alert("Cart item has been deleted successfully!!");
      console.log(response);
      this.getCart();
      location.reload();
    });
  }

  getdata(){
     console.log(this.userId);
    this.cartService.getCart(this.userId)
    .subscribe((response)=>{
      this.cart = response;
      this.subtotal = 0;
      this.counter=0;
      this.flag=0;
      for(let cartItem of response.cartItem) {
        this.subtotal = this.subtotal + cartItem.finalPrice;
        cartItem.maxcartqty=this.min(10, cartItem.product.quantity);
        
        if(cartItem.quantity>cartItem.product.quantity){
         this.alerts="only "+cartItem.product.quantity+ " quantity is available.";
         this.counter ++;
        cartItem.alerts=this.alerts;
        this.showbtn=true;
        }
        else{
          this.alerts = "";
          
        }
         if(this.counter == 0){
          this.showbtn=false;
         }
      }
     this.products = response.cartItem;
      console.log(this.products);
 
    });
  }
  getCart() {
    let userId = JSON.parse(localStorage.getItem("user")).id;
    this.cartService.getCart(userId)
    .subscribe((response)=>{
      this.subtotal = 0;
      this.counter =0;
      this.flag=0;
      for(let cartItem of response.cartItem) {
        this.subtotal = this.subtotal + cartItem.finalPrice;
        
        cartItem.maxcartqty=this.min(10, cartItem.product.quantity);
        console.log("abc");
        console.log(cartItem.product.quantity);
        console.log(cartItem.quantity);
        if(cartItem.quantity>cartItem.product.quantity){
          this.alerts="only "+ cartItem.product.quantity+ " quantity is available.";
          cartItem.alerts=this.alerts;
          this.showbtn=true;
          this.flag ++;
        }
      }
      this.products = response.cartItem,
      console.log(this.cartService);
    });
    
  }
min(a,b){
  if(a<b){
    return a;
  }
  return b;
}
}


