import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Sí puede volar' : 'No puede volar';
  }
}
