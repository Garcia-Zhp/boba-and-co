import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = 'assets/menu-boba-data.json' //json path

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<any> {
    return this.http.get<any>(this.menuUrl) // fetch the data
  }
}
