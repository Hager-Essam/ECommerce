import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products/?categorySlug=clothes';
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}


  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/category/${category}`);
  }


  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
