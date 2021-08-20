import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from 'app/product/product';
import { ProductComponent } from 'app/product/product.component';
import { Cart } from './cart';
import { CartService } from './cart.service';
import { CartItem } from './cartitem';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: CartItem[];
  subtotal: number = 0;
  max: number;
  cartItem: CartItem;
  cart: Cart;
  userName: String;
  maxcartqty: number;
  alerts: string;
  showbtn: boolean;
  counter: number;
  userId: number;
  flag: number;
  //item: Product;
  constructor(private router: Router, private cartService: CartService, public pc:ProductComponent) {
    this.cartItem = new CartItem();
   }

  ngOnInit() {
    if(localStorage.length <= 0){
      this.router.navigate(['']); 
    }


    this.getCart();
    this.userName = JSON.parse(localStorage.getItem("user")).name;
    console.log(this.userName);
    this.showbtn=false;
    this.userId = JSON.parse(localStorage.getItem("user")).id;
  }

  changeQunatity(event, cartItemId) {
    let selectedQunatity = event.target.value;
    this.subtotal = 0;
    this.counter=0;
    for(let cartItem of this.products) {
      if(cartItem.id === cartItemId) {
        cartItem.finalPrice = selectedQunatity * cartItem.product.price;
      }
      this.subtotal = this.subtotal + cartItem.finalPrice;
    }
    this.cart.cartItem = this.products;
    console.log(this.cart);
    this.cartService.updateCart(this.cart).subscribe((response)=>{
        console.log(response); 
        this.getdata(); 
    }); 
  }

getdata(){
  console.log(this.userId);
    this.cartService.getCart(this.userId)
    .subscribe((response)=>{
      this.cart = response;
      this.subtotal = 0;
      this.counter=0;
      for(let cartItem of response.cartItem) {
        this.subtotal = this.subtotal + cartItem.finalPrice;
        cartItem.maxcartqty=this.min(10, cartItem.product.quantity);
         
        // console.log("abc");
        // console.log(cartItem.product.quantity);
        // console.log(cartItem.quantity);
        if(cartItem.quantity>cartItem.product.quantity){
         this.alerts="only "+cartItem.product.quantity+ " quantity is available.";
         //alert(this.alerts = "at " + cartItem.product.name);
         this.counter++;
        cartItem.alerts=this.alerts;
        this.showbtn=true;
        //alert("quantity is not available");
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
      this.cart = response;
      this.subtotal = 0;
      this.counter=0;
      for(let cartItem of response.cartItem) {
        this.subtotal = this.subtotal + cartItem.finalPrice;
        cartItem.maxcartqty=this.min(10, cartItem.product.quantity); 
        console.log(cartItem.product.quantity);
        console.log(cartItem.quantity);
        if(cartItem.quantity>cartItem.product.quantity){
          this.alerts="only "+ cartItem.product.quantity+ " quantity is available.";
          cartItem.alerts=this.alerts;
          this.counter++;
          this.showbtn=true;
        
        }
       
      }
      
      this.products = response.cartItem;
      console.log(this.products);
      
    });
   }

min(a,b){
  if(a<b){
    return a;
  }
  return b;
}

  deleteCartItem(cartItemId) {
    this.cartService.deleteCartItem(cartItemId)
    .subscribe((response)=>{
      alert("Cart item has been deleted successfully!!");
      console.log(response);
      this.getCart();
    });
  }
addCheckout(){
let userId = JSON.parse(localStorage.getItem("user")).id;
    this.cartService.getCart(userId)
    .subscribe((response)=>{
      this.cart = response;
      this.subtotal = 0;
      this.flag=0;
      for(let cartItem of response.cartItem) {
        //alert("inside forloop");
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
        this.router.navigate(['/addToCheckout']);
        //alert("inside ifloop");
      }
      else{
        location.reload();
      }
      this.products = response.cartItem;
      console.log(this.products);
      
    });
 
}

}
