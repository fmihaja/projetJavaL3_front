import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
// import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [
    ToolbarModule, ButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
