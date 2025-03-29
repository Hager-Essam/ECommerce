import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  private apiUrl='https://api.escuelajs.co/api/v1/products/?categorySlug=shoes';
  constructor(private http:HttpClient) { }


  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
