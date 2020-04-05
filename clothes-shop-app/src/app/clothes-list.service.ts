import { Injectable } from '@angular/core';
import { Clothes } from './clothes';
import { clothesList} from './clothes-list';
import {Observable, of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ClothesListService {

  clothes = clothesList

  getClothesList(): Observable<Clothes[]> {
    return of(clothesList);
  }
  constructor() { }
}
