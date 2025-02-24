import { Injectable } from '@angular/core';
import { urlBack } from '../urlBack';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiResponse } from '../dto/apiResponse';
import { Client } from '../dto/Client';
// import Cliet

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl: string=`${urlBack}/clients/`

  constructor(private http: HttpClient) { }

  selectAll(): Observable<apiResponse>{
    return this.http.get<apiResponse>(`${this.apiUrl}`);
  }

  updateClient(client: Client): Observable<apiResponse> {
    return this.http.put<apiResponse>(`${this.apiUrl}`, client);
  }

  insertClient(client: Client): Observable<apiResponse> {
    return this.http.post<apiResponse>(`${this.apiUrl}`, client);
  }

}
