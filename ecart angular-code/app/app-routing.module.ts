import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VieworderdetailsComponent } from './vieworderdetails/vieworderdetails.component';

const routes: Routes=[
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productList', component: ProductComponent},
    {path: 'getCart', component: CartComponent},
    {path: 'addToCart', component: CartComponent},
    {path: 'viewproduct/:id', component: ViewproductComponent},
    {path: 'addToCheckout', component: CheckoutComponent},
    {path: 'forgetpassword', component: ForgetpasswordComponent},
    {path: 'resetpassword', component: ResetpasswordComponent},
    {path: 'vieworderdetails', component: VieworderdetailsComponent} 
];
 
@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {
   
}
export const routingComponents=[RegisterComponent, LoginComponent, HomeComponent, ForgetpasswordComponent, ResetpasswordComponent, VieworderdetailsComponent]

function ngOnInit() {
   
    // this.userName = JSON.parse(sessionStorage.getItem("user")).name;
    // //sessionStorage.clear();
    // console.log(this.userName);
     throw new Error('Function not implemented.');
}
