import { Component, input } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './card.html',
})
export class Card {

  title = input.required();



}
