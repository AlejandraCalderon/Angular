import { SlicePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Product } from '@products/interfaces/product.interface';
import { environment } from 'src/environments/environment.development';
import { ProductImagePipe } from "../../pipes/product-image.pipe";

const baseUrl = environment.baseUrl;
@Component({
  selector: 'product-card',
  standalone: true,
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.html',
})
export class ProductCard {

  product =  input.required<Product>();

  imageUrl = computed(() => {

    if (!this.product().images.length) {
      return `${baseUrl}/files/product/no-image`;
    }

    return `${baseUrl}/files/product/${this.product().images[0]}`;
  })

}
