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
    this.initChart();
    this.stockMovementService.selectMonth().subscribe((response: apiResponse) => {
      if (response.data!=null && response.data instanceof Array) {
        this.stock = response.data as StockMovementSummary[];
      }
      console.log(this.stock);
      
      this.cd.markForCheck();
    });
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Quantite vendus',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'black',
            tension: 0.4
          },
          {
            label: 'Quantite achetés',
            data: [28, 48, 40, 19, 86, 27, 90],
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