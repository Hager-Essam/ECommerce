import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products/?categorySlug=furniture';

  constructor(private http: HttpClient) {
  }
  getFurniture(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
