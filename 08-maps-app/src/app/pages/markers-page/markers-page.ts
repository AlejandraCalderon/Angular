import {
  AfterViewInit,
  Component,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { environment } from '../../../environments/environment.development';
import { v4 as UUIDV4 } from 'uuid';
import { JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

interface Marker {
  id: string;
  mapBoxMarker: mapboxgl.Marker;
}

@Component({
  selector: 'app-markers-page',
  imports: [JsonPipe],
  templateUrl: './markers-page.html',
})
export class MarkersPage implements AfterViewInit {
  @ViewChild('map') mapDiv!: ElementRef<HTMLDivElement>;

  map = signal<mapboxgl.Map | null>(null);

  markers = signal<Marker[]>([]);

  zoom = signal(14);

  coordinates = signal({ lng: -1.4, lat: 40.5 });

  async ngAfterViewInit() {
    await new Promise((resolve) => setTimeout(resolve, 80));

    const map = new mapboxgl.Map({
      container: this.mapDiv.nativeElement,
      style: 'mapbox://styles/mapbox/standard',
      zoom: 14,
      center: [-74.010766, 4.664515],
    });
    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map) {
    map.on('click', (event) => this.mapClick(event));

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

  mapClick(event: mapboxgl.MapMouseEvent) {
    if (!this.map()) return;

    const map = this.map()!;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16),
    );

    const coords = event.lngLat;
    const mapBoxMarker = new mapboxgl.Marker({
      color: color,
    })
      .setLngLat(coords)
      .addTo(map);

    const newMarker: Marker = {
      id: UUIDV4(),
      mapBoxMarker: mapBoxMarker,
    };

    this.markers.set([newMarker, ...this.markers()]);

    console.log('Marker added:', this.markers());
  }

  flyToMarker(lngLat: LngLatLike) {
    if(!this.map()) return;

    this.map()!.flyTo({
      center: lngLat,
      zoom: 14,
    });

  }

  deleteMarker(marker: Marker) {
    if(!this.map()) return;

    const map = this.map()!;

    marker.mapBoxMarker.remove();

    this.markers.set(this.markers().filter((m) => m.id !== marker.id));
  }
}
