import { Component, inject, linkedSignal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { Region } from '../../interfaces/region.type';
import { rxResource } from '@angular/core/rxjs-interop';
import { CountryService } from '../../services/Country';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';



function validateQueryParam(queryParam: string) {

  queryParam = queryParam.toLowerCase();

  const validateRegions: Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    erurope: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Antarctic',
  }

  return validateRegions[queryParam] ?? 'Americas';

}


@Component({
  selector: 'app-by-region-country',
  imports: [CountryList],
  templateUrl: './by-region-country.html',
})
export class ByRegionCountry {


  countryService = inject(CountryService);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];


  activatedRoute = inject(ActivatedRoute);
  router = inject(Router)

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? ''

  selectedRegion = linkedSignal<Region | null>(() => validateQueryParam(this.queryParam));

  regionResource = rxResource({
    request: () => ({ region: this.selectedRegion() }),
    loader: ({ request }) => {
      if (!request.region) return of([]);
      this.router.navigate(['/country/by-region'], { queryParams: { region: request.region } });
      return this.countryService.searchByRegion(request.region);
    }
  })


}
