import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDto } from '../models/northwind-crud/category-dto';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindCRUDService {
  constructor(
    private http: HttpClient
  ) { }

  public getCategoryDtoList(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${API_ENDPOINT}/Categories`);
  }
}
