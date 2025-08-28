import { FormGeneratorService } from './../services/form-generator.service';
import { Component , Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
 import { FieldConfig } from '../Models/fieldConfig';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule ,CommonModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() fieldConfigs :FieldConfig[] = [];
  form!:FormGroup;

  constructor(private FormGeneratorService : FormGeneratorService ,private authService: AuthService){}
  
   ngOnInit():void{
    this.form=this.FormGeneratorService.createForm(this.fieldConfigs )
   }

   onSubmit(): void{
    if(this.form.valid){
      console.log(this.form.value);
    }
   }
   loginWithGoogle(): void {
  this.authService.loginWithGoogle()
    .then((userCred) => {
      console.log('Google user:', userCred.user);
      alert(`Welcome, ${userCred.user.displayName}`);
       //can save the data here
    })
    .catch((error) => {
      console.error('Google login error:', error);
    });
}
loginWithFacebook(): void {
  this.authService.loginWithFacebook()
    .then((userCred) => {
      console.log('Facebook user:', userCred.user);
      alert(`Welcome, ${userCred.user.displayName}`);
     })
    .catch((error) => {
      console.error('Facebook login error:', error);
    });
}
}
