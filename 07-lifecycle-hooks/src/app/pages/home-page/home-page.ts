import { afterNextRender, afterRender, Component, effect, signal } from '@angular/core';
import { Title } from '../../components/title/title';

const log = (...message: string[]) => {
  console.log(`${message[0]} %c${message.slice(1).join(', ')} `, 'color: #6f56e1');
}


@Component({
  selector: 'app-home-page',
  imports: [Title],
  templateUrl: './home-page.html',
})
export class HomePage {

  traditionalProperty = 'Traditional Property';
  signalProperty = signal('Signal Property');

  constructor() {
    log('HomePage constructor');
  }

  bassicEffect = effect((onCleanup) => {
    log('HomePage effect');

    onCleanup(() => {
      log('HomePage effect cleanup');
    })
  })

  ngOnInit() {
    log('HomePage ngOnInit');
  }
  ngOnChanges() {
    log('HomePage ngOnChanges');
  }
  ngDoCheck() {
    log('HomePage ngDoCheck');
  }
  ngAfterContentInit() {
    log('HomePage ngAfterContentInit');
  }
  ngAfterContentChecked() {
    log('HomePage ngAfterContentChecked');
  }
  ngAfterViewInit() {
    log('HomePage ngAfterViewInit');
  }
  ngAfterViewChecked() {
    log('HomePage ngAfterViewChecked');
  }
  ngOnDestroy() {
    log('HomePage ngOnDestroy');
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('HomePage afterNextRenderEffect');
  })

  afterRender = afterRender(() => {
    log('HomePage afterRender');
  })

}
