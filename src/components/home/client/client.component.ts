import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { AutoFocusModule } from 'primeng/autofocus';
import { DialogModule } from 'primeng/dialog';
import { TabsModule } from 'primeng/tabs';

import { ClientService } from '../../../service/client.service';
import { Client } from '../../../dto/Client';
import { apiResponse } from '../../../dto/apiResponse';
import { Order } from '../../../dto/Order';

@Component({
  selector: 'app-client',
  imports: [
    TableModule, InputTextModule,
    IconFieldModule, InputIconModule,
    ButtonModule, AutoFocusModule,
    DialogModule, FloatLabelModule,
    ReactiveFormsModule, TabsModule
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  modalAdd: boolean = false;
  modalUpdate: boolean = false;
  clients: Client[] = []
  orders: Order[] = []; // Typage clair

  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.clientForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      firstName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.clientService.selectAll().subscribe({
      next:(response: apiResponse)=>{
        if (response.data != null && Array.isArray(response.data)) {
          this.clients = response.data;
        }
        console.log(this.clients);
      },
      error:(error)=>{
        console.error('Erreur lors de la récupération des clients', error);
      }
    })
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      this.clientService.insertClient(this.clientForm.value).subscribe({
        next: (response) => {
          console.log('Client ajouté avec succès', response);
          this.modalAdd = false;
          
          // Réinitialisation plus complète du formulaire
          this.clientForm.reset();
          this.clientForm.markAsPristine();
          this.clientForm.markAsUntouched();
          this.clientService.selectAll().subscribe({
            next:(response: apiResponse)=>{
              if (response.data != null && Array.isArray(response.data)) {
                this.clients = response.data;
              }
              console.log(this.clients);
            },
            error:(error)=>{
              console.error('Erreur lors de la récupération des clients', error);
            }
          })
          // Ajouter une notification utilisateur (ex: Snackbar)
          // this.showSuccessNotification('Client créé avec succès');
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du client', error);
          
          // Gestion d'erreur améliorée
          const errorMessage = error.error?.message || 'Erreur lors de la création du client';
          console.log(errorMessage);
          
          // this.showErrorNotification(errorMessage);
        }
      });
    }
  }

  showClientOrder(client: Client): void {
    this.modalUpdate=true
    this.clientService.find(client).subscribe({
      next:(response: apiResponse)=>{
        // console.log(response);
        const clientData = response.data as Client;
        if (clientData != null && Array.isArray(clientData.orders)) {
          if (clientData) {
            this.orders = clientData.orders;
            console.log(this.orders);
            
          }
        }

        // console.log(this.orders);
      },
      error:(error)=>{
        console.error('Erreur lors de la récupération des clients', error);
      }
    })
    // console.log('Affichage des commandes du client', email);
  }
}