import { Injectable } from '@angular/core';
import { urlBack } from '../urlBack';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiResponse } from '../dto/apiResponse';
import { StockMovement } from '../dto/StockMovement';

@Injectable({
  providedIn: 'root'
})
export class StockMovementService {
  private apiUrl: string=`${urlBack}/stockmovements/`

  constructor(private http: HttpClient) { }

  selectAll(): Observable<apiResponse>{
    return this.http.get<apiResponse>(`${this.apiUrl}`);
  }

  insert(stock: StockMovement): Observable<apiResponse> {
    return this.http.post<apiResponse>(`${this.apiUrl}`, stock);
  }

  selectMonth(): Observable<apiResponse> {
    return this.http.get<apiResponse>(`${this.apiUrl}monthly`);
  }
}
