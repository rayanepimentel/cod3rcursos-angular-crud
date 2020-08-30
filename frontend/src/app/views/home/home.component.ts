import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../components/product/product.service';
import { Product } from './../../components/product/product.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[]
  
  displayedColumns = ['id', 'name', 'price', 'url']


  constructor(private headerService: HeaderService, private prodService: ProductService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
   }

   ngOnInit(): void {
    this.prodService.read().subscribe(res => {
      this.products = res
    })
    
  }

}
