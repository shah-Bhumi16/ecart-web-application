import { Component, OnInit } from '@angular/core';
import { Resetpassword } from './resetpassword';
import {ResetpasswordService} from './resetpassword.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  
  resetpassword= new Resetpassword();
  complexForm: FormGroup;
  rid: string = localStorage.getItem('resetid');
  //location: any;
  
  constructor(private _resetpasswordService: ResetpasswordService, private router: Router, private location: Location, fb: FormBuilder) { } 

  ngOnInit() {
    if(this.rid == null){
    this.location.back();
    }

    this.complexForm= new FormGroup({   
        otp: new FormControl(null, [Validators. required, Validators.minLength(2)]),
        password: new FormControl(null, [Validators. required, Validators.minLength(6)])
      });
  }

resetpasswordnew(){
  this.resetpassword.id = parseInt(localStorage.getItem("resetid"));
  console.log(this.resetpassword.password);
    this._resetpasswordService.resetpassword(this.resetpassword)

    .subscribe(response=>{
          console.log(response);
          localStorage.clear();
          this.router.navigate(['/']);
     },
     (error)=>{
           
            console.log(error);
          
          }
     );
        
       
     
}
  // onPass() {
  //   this.router.navigate(['/productList']);
  // }

 addLogin(): void{
    this.router.navigate(['/']);
  }

}
