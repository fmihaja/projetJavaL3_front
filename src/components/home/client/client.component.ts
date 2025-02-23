import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-client',
  imports: [
    TableModule, InputTextModule,
    IconFieldModule, InputIconModule
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
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
