import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { StockMovementSummary } from '../../../dto/StockMovementSummary';
import { StockMovementService } from '../../../service/stock-movement.service';
import { HttpClient } from '@angular/common/http';
import { apiResponse } from '../../../dto/apiResponse';

@Component({
  selector: 'app-index',
  imports: [
    ButtonModule, ChartModule
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  data: any;
  options: any;
  stock: StockMovementSummary[] = [];

  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef, private stockMovementService: StockMovementService, private http: HttpClient) {}

  ngOnInit() {
    this.stockMovementService.selectMonth().subscribe((response: apiResponse) => {
      if (response.data!=null && response.data instanceof Array) {
        this.stock = response.data as StockMovementSummary[];
        this.initChart();

      }
      console.log(this.stock);
      
      this.cd.markForCheck();
    });

  }

  getTotalSold(): number {
    return this.stock
      .filter(stock => stock.type.toUpperCase() === 'OUT')
      .reduce((sum, current) => sum + Math.abs(current.quantite), 0);
  }

  getTotalBought(): number {
    return this.stock
      .filter(stock => stock.type.toUpperCase() === 'IN')
      .reduce((sum, current) => sum + current.quantite, 0);
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
        labels: [...new Set(this.stock.map(item => item.produitName))],
        datasets: [
          {
            label: 'Quantite vendus',
            data: this.stock.filter((stock) => stock.type === 'OUT').map((stock) => stock.quantite),
            fill: false,
            borderColor: 'black',
            tension: 0.4
          },
          {
            label: 'Quantite achetés',
            data: this.stock.filter((stock) => stock.type === 'IN').map((stock) => stock.quantite),
            fill: false,
            borderColor: documentStyle.getPropertyValue('--p-gray-500'),
            tension: 0.4
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
      this.cd.markForCheck();
    }
  }
}