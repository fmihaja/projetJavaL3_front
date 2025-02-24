import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { AutoFocusModule } from 'primeng/autofocus';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-client',
  imports: [
    TableModule, InputTextModule,
    IconFieldModule, InputIconModule,
    ButtonModule, AutoFocusModule,
    DialogModule, FloatLabelModule
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  modal: boolean=false;
  products=[
    {
      code:600,
      name:"test",
      category:"poids lourds",
      quantity:500
    },
    {
      code:500,
      name:"test3",
      category:"poids leger",
      quantity:600
    },
    {
      code:900,
      name:"test5",
      category:"aoids lourds",
      quantity:700
    },
  ]
}
