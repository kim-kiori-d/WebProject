import { Injectable } from '@angular/core';
import { Clothes } from './clothes';
import {Observable, of} from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Clothes[] = [];
  constructor() { }

  addClothesToCart(clothes: Clothes) {
    this.cart.push(clothes);
  }

  getClothesFromCart(): Observable<Clothes[]> {
    return of(this.cart);
  }

  deleteClothesFromCart(clothes: Clothes) {
    for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === clothes.id) {
            this.cart.splice(i, 1);
        }
    }
    // tslint:disable-next-line:no-shadowed-variable
    this.cart.find(clothes => clothes.id === clothes.id);
  }
}
