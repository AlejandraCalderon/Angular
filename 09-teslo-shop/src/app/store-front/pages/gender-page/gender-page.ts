import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';
import { ProductCard } from "@products/components/product-card/product-card";
import { Gender } from '../../../products/interfaces/product.interface';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCard],
  templateUrl: './gender-page.html',
})
export class GenderPage {

  route = inject(ActivatedRoute)

  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)))


  productService = inject(ProductsService);

  productsResource = rxResource({
    request: () => ({ gender: this.gender() }),
    loader: ({ request }) => {
      return this.productService.getProducts({
        gender: request.gender
      })
    }
  })


}
