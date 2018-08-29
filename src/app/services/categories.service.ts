import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorie } from '../domain/icategorie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  // tslint:disable-next-line:no-inferrable-types
  url: string = 'http://localhost:8080';

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<ICategorie[]> {
     return this._http.get<ICategorie[]>(this.url);
  }
}
