import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
// import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  imports: [
    ToolbarModule, ButtonModule,
    DrawerModule, CardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  settingNav: boolean = false;
}
