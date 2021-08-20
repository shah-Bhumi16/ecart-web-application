import { Component, OnInit } from '@angular/core';
import {Login} from './login'
import { LoginService } from './login.service';
import {Observable} from 'rxjs/Rx';
import { Product } from 'app/product/product';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Logins: Login[];
  login=new Login();
  complexForm: FormGroup;
  inputValue: string;
  flag: boolean;
  userName: String;
  constructor(private _loginService: LoginService, private router: Router) {}
  
  ngOnInit() {
    
    //  if(localStorage.length == 0){
    //    this.router.navigate(['/']);
    //  }
    if(localStorage.getItem("user") !=null){
      this.router.navigate(['./productList']); 
    }


    this.complexForm= new FormGroup({
      id:new FormControl(null),
        email: new FormControl(null, [Validators. required, Validators.email,Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
        password: new FormControl(null, [Validators. required, Validators.minLength(6)])
      });
  }
  
  addLogin(): void{
        this._loginService.addLogin(this.login).subscribe(response=>{
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response));
          console.log(localStorage.getItem('user'));
  
          this.onPass()},
          (error)=>{
            if(error.status===400){
              alert("Enter valid email");
            }
            if(error.status===404){
              alert("Enter valid password");
            }
            console.log(error);
       });
  
this.flag=true

}
onPass() {
this.router.navigate(['/productList']);
}

 addRegister(): void{
    this.router.navigate(['/register']);
  }

}
 


