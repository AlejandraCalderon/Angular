import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";


export class CountryMapper {

  static mapRestCountryToCountry(RestCountry: RESTCountry): Country {
    return {
      cca2: RestCountry.cca2,
      flag: RestCountry.flag,
      flagSvg: RestCountry.flags.svg,
      name: RestCountry.translations['spa'].common ?? 'N/A',
      capital: RestCountry.capital?.join(','),
      population: RestCountry.population,
      region: RestCountry.region,
      subRegion: RestCountry.subregion,
    };
  }


  static mapRestCountryToCountryArray(RestCountries: RESTCountry[]): Country[] {
    return RestCountries.map(this.mapRestCountryToCountry);
  }

}
