import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
// import { IconFieldModule } from 'primeng/iconfield';
// import { InputIconModule } from 'primeng/inputicon';
// import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, ButtonModule,
    InputTextModule, FloatLabelModule,
    // IconFieldModule, InputIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular19';
}
