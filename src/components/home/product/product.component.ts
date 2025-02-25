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
import { apiResponse } from '../../../dto/apiResponse';
import { ProductsService } from '../../../service/products.service';
import { Product } from '../../../dto/Product';

@Component({
  selector: 'app-product',
  imports: [
    TableModule, InputTextModule,
    IconFieldModule, InputIconModule,
    ButtonModule, AutoFocusModule,
    DialogModule, FloatLabelModule,
    ReactiveFormsModule, TabsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  modalAdd: boolean = false;
  modalUpdate: boolean = false;
  products: Product[] = []
  // orders: Order[] = []; // Typage clair

  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductsService) {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(5000), Validators.pattern('^[0-9]*$')]],
      quantite: ['', [Validators.required, Validators.min(1), , Validators.pattern('^[0-9]*$')]],

    });
  }

  ngOnInit(): void {
    this.productService.selectAll().subscribe({
      next:(response: apiResponse)=>{
        if (response.data != null && Array.isArray(response.data)) {
          this.products = response.data;
        }
        console.log(this.products);
      },
      error:(error)=>{
        console.error('Erreur lors de la récupération des clients', error);
      }
    })
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      console.log(this.clientForm.value);
      
      this.productService.insert(this.clientForm.value).subscribe({
        next: (response) => {
          console.log('Produit ajouté avec succès', response);
          this.modalAdd = false;
          
          // Réinitialisation plus complète du formulaire
          this.clientForm.reset();
          this.clientForm.markAsPristine();
          this.clientForm.markAsUntouched();
          this.productService.selectAll().subscribe({
            next:(response: apiResponse)=>{
              if (response.data != null && Array.isArray(response.data)) {
                this.products = response.data;
              }
              console.log(this.products);
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

}