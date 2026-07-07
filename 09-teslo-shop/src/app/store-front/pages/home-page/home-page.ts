
import { ProductCard } from '@products/components/product-card/product-card';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './home-page.html',
})
export class HomePage {}
