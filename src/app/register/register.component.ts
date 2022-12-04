import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // registerForm: FormGroup<RegistertionForm> = new FormGroup({
  //   name: new FormControl(null, [Validators.required]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required])
  // });
  registerForm: FormGroup = this.fb.group({
    name: this.fb.control(null, [Validators.required]),
    email: this.fb.control(null, [Validators.required, Validators.email]),
    password: this.fb.control(null, [Validators.required])
  })


  constructor(private fb: FormBuilder) {
    this.registerForm.get('name')?.valueChanges.subscribe(console.log);
  }

  submit() {
    console.log(this.registerForm)
  }
}

export interface RegistertionForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
}
