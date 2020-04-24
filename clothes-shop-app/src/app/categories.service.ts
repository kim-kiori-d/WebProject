import { Injectable } from '@angular/core';
import { Category } from './category';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {LoginResponse} from './login';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  // private categoriesUrl = 'api/categories';

  constructor(
    private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://127.0.0.1:8000/api/categories');
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:8000/api/login/', {
      username,
      password
    });
  }
}
