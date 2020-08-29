import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './../product.models'

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(
    private prodService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.prodService.readById(id).subscribe(prod => {
      this.product = prod;
    });
  }

  deleteProduct(): void {
    this.prodService.delete(this.product.id).subscribe(() => {
      this.prodService.showMessage('Produto excluido com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
