import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';

import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { DecimalPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [DecimalPipe],
  templateUrl: './fullscreen-map-page.html',
  styles: `
    div {
      height: 100vh;
      width: calc(100vw - 64px);
    }
    #controls {
      background-color: rgba(255, 255, 255, 0.8);
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      border: 1px solid #ccc;
      width: 250px;
    }
  `,
})
export class FullscreenMapPage implements AfterViewInit {
  @ViewChild('map') mapDiv!: ElementRef<HTMLDivElement>;

  map = signal<mapboxgl.Map | null>(null);

  zoom = signal(14);

  coordinates = signal({ lng: -1.4, lat: 40.5 });

  zoomEffect = effect(() => {
    if (!this.map() || this.map() === null) return;

    this.map()!.setZoom(this.zoom());
  });

  ngAfterViewInit() {
    const { lng, lat } = this.coordinates();

    const map = new mapboxgl.Map({
      container: this.mapDiv.nativeElement,
      style: 'mapbox://styles/mapbox/standard',
      projection: 'globe',
      zoom: this.zoom(),
      center: [lng, lat],
    });
    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map) {
    map.on('zoom', () => {
      const newZoom = map.getZoom();
      this.zoom.set(newZoom);
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();
      this.coordinates.set({ lng, lat });
    });

    this.map.set(map);
  }
}
