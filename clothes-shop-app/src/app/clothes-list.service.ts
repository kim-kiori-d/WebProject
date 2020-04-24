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
    return this.http.get<Clothes[]>("http://127.0.0.1:8000/api/clothes");
  }
  getClothesByCategory(id: number): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(`http://127.0.0.1:8000/api/categories/${id}clothes`);
  }
  getCategoryName(id: number): Observable<any> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get(url);
  }
}
