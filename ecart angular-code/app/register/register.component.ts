import { Component, OnInit } from '@angular/core';
import {Register} from './register'
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registers: Register[];
  register=new Register();
  complexForm: FormGroup;
  userName: String;
  flag: boolean;
  constructor(private _registerService: RegisterService, private router: Router, fb: FormBuilder) {
    
  }

ngOnInit(): void 
{
   if(localStorage.length > 0){
      this.router.navigate(['/productList']); 
    }
    
  this.complexForm= new FormGroup({
      id:new FormControl(null),
        name: new FormControl(null, [Validators. required, Validators.pattern(/^[A-Za-z ]+$/)]),
        address: new FormControl(null, [Validators. required, Validators.maxLength(200)]),
        email: new FormControl(null, [Validators. required, Validators.email,Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
        password: new FormControl(null, [Validators. required, Validators.minLength(6)])
      });
}  

  
addRegister(value: any): void{
            this._registerService.addRegister(value)
            .subscribe((response) => {
              console.log(response);
              this.reset();
              this.router.navigate(['/']);
            }, (error) =>{
                console.log(error);
                if(error.status == 500 ){
                  alert("user is aldready exists");
                }
                
            });   
    }


    
  onPass() {
    
    throw new Error('Method not implemented.');
  }
  addLogin(): void{
    this.router.navigate(['/']);
  }

    private reset(){
      this.register.id=null;
      this.register.name=null;
      this.register.address=null;
      this.register.email=null;
      this.register.password=null;
    }
}



