import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  obtenerTodosLosProductos() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://www.hostcatedral.com/api/appNoti/public/getProductosPorCategoriaID';

  constructor(private http: HttpClient) { }

  obtenerProductosPorCategoria(idCategoria: number): Observable<any[]> {
    const url = `${this.apiUrl}/${idCategoria}`;
    return this.http.get<any[]>(url);
  }
  
}