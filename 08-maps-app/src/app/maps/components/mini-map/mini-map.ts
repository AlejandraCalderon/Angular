import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  ViewChild,
} from '@angular/core';

import mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.html',
  styles: `
    div {
      width: auto;
      height: 260px;
    }
  `,
})
export class MiniMap implements AfterViewInit {
  @ViewChild('map') mapDiv!: ElementRef<HTMLDivElement>;

  lngLat = input.required<{ lng: number; lat: number }>();
  zoom = input<number>(14)

  async ngAfterViewInit() {
    const map = new mapboxgl.Map({
      container: this.mapDiv.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      projection: 'globe',
      zoom: this.zoom(),
      center: this.lngLat(),
      interactive: false,
    });

    new mapboxgl.Marker().setLngLat(this.lngLat()).addTo(map);
  }
}
