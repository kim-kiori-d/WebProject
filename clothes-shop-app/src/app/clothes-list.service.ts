import { Injectable } from '@angular/core';
import { Clothes } from './clothes';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClothesListService {

  private clothesUrl = 'api/clothes';
  private categoriesUrl = 'api/categories';
  clothes: Clothes[];

  constructor(
    private http: HttpClient) { }

  getClothesList(): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(this.clothesUrl);
  }
  getClothesByCategory(id: number): Observable<Clothes[]> {
    const url = `${this.clothesUrl}/?category=${id}`;
    return this.http.get<Clothes[]>(url);
  }
  getCategoryName(id: number): Observable<any> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get(url);
  }
}
