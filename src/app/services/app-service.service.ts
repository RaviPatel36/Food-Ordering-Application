import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor( private http: HttpClient) { }

  getAllPaymentHistory(): Observable<any> {
    return this.http.get('assets/Json/payment-history.json');
  }

  getAllMenuDishes():Observable<any> {
    return this.http.get('assets/Json/menuDishes.json');
  }

  getAllDishes() :Observable<any> {
    return this.http.get('assets/Json/dish.json');
  }

  getAllOrders() :Observable<any> {
    return this.http.get('assets/Json/order.json');
  }
}
