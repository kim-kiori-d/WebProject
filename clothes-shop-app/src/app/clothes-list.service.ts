import { Injectable } from '@angular/core';
import { Clothes } from './clothes';
import { clothesList} from './clothes-list';
import { CATEGORIES } from './categories-list';
import {Observable, of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ClothesListService {

  clothes = clothesList
  categories = CATEGORIES;

constructor() { }

  getClothesList(): Observable<Clothes[]> {
    return of(this.clothes);
  }
  getClothesByCategory(id): Observable<Clothes[]>{
    const neededClothes = this.clothes.filter(cloth => cloth.category === id);
    return of(neededClothes);
  }
  getCategoryName(id): Observable<any>{
    const category = this.categories.find(c => c.id===id);
    return of(category);
  }
}
