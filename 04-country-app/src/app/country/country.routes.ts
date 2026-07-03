import { Routes } from "@angular/router";

import { CountryLayout } from "./layouts/CountryLayout/CountryLayout";
import { ByCapitalPage } from "./pages/by-capital-page/by-capital-page";
import { ByCountryPage } from "./pages/by-country-page/by-country-page";
import { ByRegionCountry } from "./pages/by-region-country/by-region-country";
import { CountryPage } from "./pages/country-page/country-page";


export const countryRoutes: Routes = [

  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage
      },
      {
        path: 'by-country',
        component: ByCountryPage
      },
      {
        path: 'by-region',
        component: ByRegionCountry
      },
      {
        path: 'by/:code',
        component: CountryPage
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  }
];


export default countryRoutes;
