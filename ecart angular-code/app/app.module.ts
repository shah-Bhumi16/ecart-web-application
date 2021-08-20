import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';
//import { HomeComponent } from './home/home.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { LoginService } from './login/login.service';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { DataTableModule } from 'angular2-datatable';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewproductService } from './viewproduct/viewproduct.service';
import { ProductService } from './product/product.servise';
import { CartService } from './cart/cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutService } from './checkout/checkout.service';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ForgetpasswordService } from './forgetpassword/forgetpassword.service';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResetpasswordService } from './resetpassword/resetpassword.service';
import { VieworderdetailsComponent } from './vieworderdetails/vieworderdetails.component';
import { VieworderdetailsService } from './vieworderdetails/vieworderdetails.service';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProductComponent,
    CartComponent,
    ViewproductComponent,
    CheckoutComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    VieworderdetailsComponent,
    FilterPipe
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RegisterService,LoginService, ForgetpasswordService, ResetpasswordService,ViewproductService, VieworderdetailsService, ProductService, CartService, CheckoutService,ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 

}