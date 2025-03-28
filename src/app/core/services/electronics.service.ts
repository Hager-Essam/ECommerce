import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products/?categorySlug=electronics';

  constructor(private http: HttpClient) {
  }
  getElectronics(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
