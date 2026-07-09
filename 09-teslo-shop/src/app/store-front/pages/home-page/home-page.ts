
import { ProductCard } from '@products/components/product-card/product-card';
import { Component, inject } from '@angular/core';
import { ProductsService } from '@products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './home-page.html',
})
export class HomePage {

  productService = inject(ProductsService);

  productsResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
      return this.productService.getProducts({
      })
    }
  })



}
