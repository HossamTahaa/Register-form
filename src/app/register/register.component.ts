import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { FieldConfig } from '../Models/fieldConfig';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [FormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterForm {
    
  resgisterFields: FieldConfig[] = [
  {
    accessor: 'First Name',
    type: 'text',
    value: '',
    validations: [
      { type: 'required' },
      { type: 'minLength', value: 2 }
    ]
  },
  {
    accessor: 'Last Name',
    type: 'text',
    value: '',
    validations: [
      { type: 'required' },
      { type: 'minLength', value: 2 }
    ]
  },
  {
    accessor: 'User Name',
    type: 'text',
    value: '',
    validations: [
      { type: 'required' },
      { type: 'minLength', value: 4 }
    ]
  },
  {
    accessor: 'Email',
    type: 'text',
    value: '',
    validations: [
      { type: 'required' },
      { type: 'emailOrPhone' }
    ]
  },

  {
    accessor: 'Password',
    type: 'password',
    value: '',
    validations: [
      { type: 'required' },
      { type: 'minLength', value: 6 }
    ]
  },
  {
    accessor: 'Confirm Password',
    type: 'password',
    value: '',
    validations: [
      { type: 'required' },
      { type: 'minLength', value: 6 }
    ]
  },
  {
    accessor:'Phone',
    type: 'tel',
    value:'',
    validations :[
    { type:' required'},
    { type: 'minLength', value:10}
    ]
   },
  {
    accessor: 'Gender',
    type: 'select',
    value: '',
    validations: [
      { type: 'required' }
    ],
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' }
    ]
  }
]

onResgisteSubmit(data:any){
  console.log ("The Data: ",data);
}
   
}
