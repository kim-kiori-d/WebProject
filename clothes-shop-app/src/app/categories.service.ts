import { Injectable } from '@angular/core';
import { Category } from './category';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesUrl = 'api/categories'

  constructor(
    private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}
