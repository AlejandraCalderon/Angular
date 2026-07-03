import { Component, inject,  linkedSignal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/Country';
import {  of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal<string>(() => this.queryParam);

  countryResource = rxResource(
    {
      request: () => (
        { query: this.query() }
      ),
      loader: ({ request }) => {
        if(!request.query) return  of([]);
        this.router.navigate(['/country/by-capital'], { queryParams: { query: request.query } });
        return  this.countryService.searchByCapital(request.query);
      }
    })
}
