import { Component, OnInit } from '@angular/core';
import { Forgetpassword } from './forgetpassword';
import { ForgetpasswordService } from './forgetpassword.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  // forgetpassword: Forgetpassword[];
  forgetpassword= new Forgetpassword();
  complexForm: FormGroup;
  userName: String;
  inputValue: string;
  flag: boolean;
  constructor(private _forgetpasswordService: ForgetpasswordService, private router: Router, fb: FormBuilder) { }

  ngOnInit() {
    if(localStorage.length > 0){
      
      this.router.navigate(['/productList']); 
    }
    
      this.complexForm= new FormGroup({   
        email: new FormControl(null, [Validators. required, Validators.email,Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')])
       
      });
  }
 forgetpasswordnew(){
   this._forgetpasswordService.forgetpassword(this.forgetpassword).subscribe(response=>{

        console.log(response);
        localStorage.setItem("resetid", JSON.stringify(response));
        this.router.navigate(['/resetpassword']);
        },
          
          (error)=>{
            if(error.status===404){
              alert("Your email is not registred. Enter valid email address!");
            }
            
            console.log(error);
          
          });
        
 }
//  resetpassword():void{
//    this.router.navigate(['/resetpassword']);
//  } 

}
//  addLogin(): void{
//     this.router.navigate(['/']);
//   }

