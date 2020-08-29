import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Product } from './product.models'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl = "http://localhost:3600/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  //função responsavel por inserir novo produto no backend
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  //função para ler os dados[array de product] do produto product-read
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  //função para atualizar:

  //função para ler o id
  readById(id: string): Observable<Product> {
    const Url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(Url)
  }

  //receber o produto atualizado
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}