import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './../models/Producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = 'http://localhost:4000/api/productos/';

  constructor(private http: HttpClient) {}
  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }
}
