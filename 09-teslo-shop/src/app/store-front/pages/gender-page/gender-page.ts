import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';
import { ProductCard } from "@products/components/product-card/product-card";
import { Pagination } from "@shared/components/pagination/pagination";
import { PaginationService } from '@shared/components/pagination/pagination.service';


@Component({
  selector: 'app-gender-page',
  imports: [ProductCard, Pagination],
  templateUrl: './gender-page.html',
})
export class GenderPage {

  route = inject(ActivatedRoute)

  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)))


  productService = inject(ProductsService);

  paginationService = inject(PaginationService);

  productsResource = rxResource({
    request: () => ({ gender: this.gender(), page: this.paginationService.currentPage() }),
    loader: ({ request }) => {
      return this.productService.getProducts({
        gender: request.gender,
        offset: (request.page - 1) * 8
      })
    }
  })


}
