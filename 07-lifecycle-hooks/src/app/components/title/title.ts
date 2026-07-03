import { Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
})
export class Title {

  title = input.required<string>();

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const change = changes[inputName];
      console.log(`Title ngOnChanges - ${inputName}: currentValue = ${change.currentValue}, previousValue = ${change.previousValue}`);
      console.log('Title ngOnChanges');
    }
  }
}
