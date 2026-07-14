
import { ProductCard } from '@products/components/product-card/product-card';
import { Component, inject } from '@angular/core';
import { ProductsService } from '@products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Pagination } from "@shared/components/pagination/pagination";
import { PaginationService } from '@shared/components/pagination/pagination.service';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCard, Pagination],
  templateUrl: './home-page.html',
})
export class HomePage {

  productService = inject(ProductsService);

  paginationService = inject(PaginationService);


  productsResource = rxResource({
    request: () => ({page: this.paginationService.currentPage()}),
    loader: ({ request }) => {
      return this.productService.getProducts({
        offset: (request.page - 1) * 8,
      })
    }
  })



}
