import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
// import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-home',
  imports: [
    ToolbarModule, ButtonModule,
    DrawerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visible2: boolean = false;
}
