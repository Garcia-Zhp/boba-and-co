import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuResponse } from '../model/menu-response.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = 'assets/menu-boba-data.json' //json path
  private apiBaseUrl = 'http://localhost:8000'; //local host port in which mock json server runs on
  
  constructor(private http: HttpClient) { }

  getMenuData(): Observable<any> {
    return this.http.get<any>(this.menuUrl) // fetch the data
  }

  getLatteItems(): Observable<MenuResponse> {
    return this.http.get<MenuResponse>(`${this.apiBaseUrl}/menu/latte`);
  }

  getBobaItems(): Observable<MenuResponse> {
    return this.http.get<MenuResponse>(`${this.apiBaseUrl}/menu/boba`);
  }

  getTeaItems(): Observable<MenuResponse> {
    return this.http.get<MenuResponse>(`${this.apiBaseUrl}/menu/tea`);
  }}

