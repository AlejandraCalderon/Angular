import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'HeroCreatorPipe'
})

export class HeroCreatorPipe implements PipeTransform {
  transform(value: Creator): string {
    return value === Creator.DC ? 'DC' : 'Marvel';
  }
}
