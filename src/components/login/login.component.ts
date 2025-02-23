import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
  selector: 'app-login',
  imports: [
   ButtonModule,AutoFocusModule,
    InputTextModule, FloatLabelModule,
    // IconFieldModule, InputIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
