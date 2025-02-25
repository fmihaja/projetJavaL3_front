import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './layout/footer/footer.component';
import { DrawerModule } from 'primeng/drawer';
import { RouterModule } from '@angular/router';
// import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet, FooterComponent,
    RouterModule,
    ToolbarModule, ButtonModule, DrawerModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  settingNav: boolean = false;

}
