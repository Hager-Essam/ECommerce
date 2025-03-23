import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  private apiUrl = 'https://fakestoreapi.com/products/category/jewelery';

  constructor(private http: HttpClient) {
  }

  getAccessories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


}
