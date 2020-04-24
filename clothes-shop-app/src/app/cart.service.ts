import { Injectable } from '@angular/core';
import { Clothes } from './clothes';
import {Observable, of} from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Clothes[] = [];
  constructor(private http: HttpClient) { }

  addClothesToCart(clothes: Clothes) {
    return this.http.post<Clothes>("http://127.0.0.1:8000/api/card/clothes", clothes);
  }

  getClothesFromCart(): Observable<Clothes[]> {
    return this.http.get<Clothes[]>("http://127.0.0.1:8000/api/card/clothes");
  }

  deleteClothesFromCart(clothes: Clothes) {
    return this.http.delete<Clothes>("http://127.0.0.1:8000/api/card/clothes")
  }
}
