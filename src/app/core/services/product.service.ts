import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {

  }

  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/?categorySlug=${category}`);
  }
  getAllProducts(){
    return this.http.get<any[]>(this.baseUrl);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}
