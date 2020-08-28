import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor () { }

  showConsole(msg: string): void {
    console.log(msg)
  }
}