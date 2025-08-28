import { Injectable } from "@angular/core";
import { FormBuilder , FormGroup ,ValidatorFn, Validators, AbstractControl, ValidationErrors } from "@angular/forms";
import { FieldConfig } from "../Models/fieldConfig";

@Injectable({ providedIn: 'root' })

export class FormGeneratorService{

constructor (private fb : FormBuilder){}

   createForm(fields:FieldConfig[]): FormGroup{

    const FormGroup = this.fb.group({});
      
    fields.forEach(field=> {
        const control=this.fb.control(
            {
                value:field.value || '',
                disabled: field.disabled || false
            },
          this.getValidators(field.validations || [])
         );
        FormGroup.addControl(field.accessor,control)
    })
    
     return FormGroup;
   }
   
  private getValidators(validations: { type: string; value?: any }[]): ValidatorFn[] {
    const validatorFns: ValidatorFn[] = [];

    validations.forEach(validation => {
      switch (validation.type) {
        case 'required':
          validatorFns.push(Validators.required);
          break;
        case 'min':
          validatorFns.push(Validators.min(validation.value));
          break;
        case 'max':
          validatorFns.push(Validators.max(validation.value));
          break;
        case 'email':
          validatorFns.push(Validators.email);
          break;
        case 'emailOrPhone':
          validatorFns.push(this.emailOrPhoneValidator());
          break;
        case 'minLength':
          validatorFns.push(Validators.minLength(validation.value));
          break;
        case 'maxLength':
          validatorFns.push(Validators.maxLength(validation.value));
          break;
         default:
          break;
      }
    });

    return validatorFns;
  } 

  private emailOrPhoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;

      // Email regex pattern
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // Phone number regex pattern (allows numbers, spaces, dashes, and parentheses)
      const phonePattern = /^[0-9\s\-\(\)]{10,}$/;

      if (emailPattern.test(value) || phonePattern.test(value)) {
        return null;
      }

      return { emailOrPhone: true };
    };
  }
}
