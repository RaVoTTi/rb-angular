import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { IOrder, IResponse, IStripe } from 'libs/utils/src';
import { firstValueFrom, Observable, switchMap, take } from 'rxjs';
// declare global {
//   interface Window {
//     Stripe?: any;
//   }
// }
@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  API_URL = environment.API_URL;
  private readonly STRIPE!: any;

  constructor(
    private http: HttpClient,

    private router: Router
  ) {
  }

  postMyPlaceOrder(id: string) {
    return this.http
      .post<IStripe>(`${this.API_URL}/myorder/placeorder/${id}`, {  })
      .pipe(
        switchMap(({ url }) => {
          return window.location.href = url;
        })
      );
  }
  getMyPlaceOrder(id: string): Observable<IResponse<IOrder>> {
    return this.http.get<IResponse<IOrder>>(
      `${this.API_URL}/myorder/placeorder/${id}`
    );
  }

  patchCheckout(orderId: string, token: string): Promise<any> {
    return this.http
      .patch<any>(`${this.API_URL}/myorder/checkout/${orderId}`, { token })
      .toPromise();
  }
  getConfirmOrder(orderId: string): Observable<IResponse> {
    return this.http.get<IResponse>(
      `${this.API_URL}/myorder/confirm/${orderId}`
    );
  }
}
