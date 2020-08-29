import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Product } from '../product.models'

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(
    private prodService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    //receber os dados do produto já preenchido
    const id = this.route.snapshot.paramMap.get('id')
    this.prodService.readById(id).subscribe(prod => {
      this.product = prod;
    });
  }

  updateProduct(): void { 
    this.prodService.update(this.product).subscribe(() => {
      this.prodService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
   }

}
