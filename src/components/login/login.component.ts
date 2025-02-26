import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AutoFocusModule } from 'primeng/autofocus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
   ButtonModule,AutoFocusModule,
    InputTextModule, FloatLabelModule,
    ReactiveFormsModule
    // IconFieldModule, InputIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogIn: FormGroup;
  constructor (private formBody:FormBuilder, private router: Router){
    this.formLogIn=this.formBody.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    })
  }

  onSubmit(){
    if (this.formLogIn.valid){
      if (this.formLogIn.get('email')?.value=="gideona@gmail.com" && this.formLogIn.get('password')?.value==1234){
        setTimeout(() => {
          console.log('ok');
          
          this.router.navigate(['home'])
        }, 2000);
      }
    }
  }
}
