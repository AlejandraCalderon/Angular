import { Component, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css']
})
export class Pagination {

  pages = input(0)
  currentPage = input<number>(1)

  activePage = linkedSignal(this.currentPage)

  getPagesArray = () => {
    return Array.from({ length: this.pages() }, (_, i) => i + 1);
  }

}
