import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './categories-list';
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories = CATEGORIES

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
  constructor() { }
}
