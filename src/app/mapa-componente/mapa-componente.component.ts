import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import { Component, Inject, Input, OnInit } from '@angular/core';
 
export const DEFAULT_LAT = 36.724949;
export const DEFAULT_LON = -4.4232284;
export const TITULO = 'Proyecto';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
 
@Component({
  selector: 'app-mapa-componente',
  templateUrl: './mapa-componente.component.html',
  styleUrls: ['./mapa-componente.component.css']
})

export class MapaComponenteComponent implements OnInit {
  private map:any;
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO ;
 
  constructor() {
  }
 
  ngOnInit(): void {
    this.initMap();
  }
 
 
 
  private initMap(): void {
      //configuración del mapa
      this.map = L.map('map', {
        center: [this.lat, this.lon],
        attributionControl: false,
        zoom: 13
      });
 
      //iconos personalizados
      var iconDefault = L.icon({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      });
     L.Marker.prototype.options.icon = iconDefault;
 
      //titulo
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      });

      
    //ruta
    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: true,
      fitSelectedRoutes: false,
      show: false,
      routeWhileDragging: true,
      waypoints: [
        L.latLng(this.lat, this.lon)
      ]
    }).addTo(this.map);
      tiles.addTo(this.map);
    }
  }