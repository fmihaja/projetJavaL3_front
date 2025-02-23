import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './layout/footer/footer.component';
import { DrawerModule } from 'primeng/drawer';

// import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet, FooterComponent,
    ToolbarModule, ButtonModule, DrawerModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  settingNav: boolean = false;

}
