import { Injectable } from '@angular/core';
import { IOrder, IResponse } from 'libs/utils/src';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MyOrdersService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}
  getMyOrders(condition: number): Observable<IResponse<IOrder[]>> {
    return this.http.get<IResponse<IOrder[]>>(`${this.API_URL}/myorder`);
  }
}
