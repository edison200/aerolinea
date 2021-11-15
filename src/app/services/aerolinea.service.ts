import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personas,Aeropuerto,Aviones,Marcas,Reservas,Tarifas,Cargos,Empleados,Vuelos,
  Detalle_Vuelo,Consumo,Detalle_Consumo,Producto,Pasajero } from '../models/aerolinea.interface';
@Injectable({
  providedIn: 'root'
})
export class AerolineaService {
  url: string = 'http://servicios.thesmartfrank.es/';
  urlRequest: string = "";
  
  constructor(private httpClient: HttpClient) {}
  obtenerPersonas(): Observable<Personas[]> {
    console.log(this.urlRequest)
    return this.httpClient.get<Personas[]>('/personas');
  }
  obtenerAeropuerto(): Observable<Aeropuerto[]> {
    this.urlRequest = this.url + 'aeropuertos';
    console.log(this.urlRequest)
    return this.httpClient.get<Aeropuerto[]>(this.urlRequest);
  }
  obtenerMarcas(): Observable<Marcas[]> {
    this.urlRequest = this.url + 'marcas';
    return this.httpClient.get<Marcas[]>(this.urlRequest);
  }
  obtenerReservas(): Observable<Reservas[]> {
    this.urlRequest = this.url + 'reservas';
    return this.httpClient.get<Reservas[]>(this.urlRequest);
  }
  obtenerTarifas(): Observable<Tarifas[]> {
    this.urlRequest = this.url + 'tarifas';
    return this.httpClient.get<Tarifas[]>(this.urlRequest);
  }
  obtenerCargos(): Observable<Cargos[]> {
    this.urlRequest = this.url + 'cargos';
    return this.httpClient.get<Cargos[]>(this.urlRequest);
  }
  obtenerEmpleados(): Observable<Empleados[]> {
    this.urlRequest = this.url + 'empleados';
    return this.httpClient.get<Empleados[]>(this.urlRequest);
  }
  obtenerAviones(): Observable<Aviones[]> {
    this.urlRequest = this.url + 'aviones';
    return this.httpClient.get<Aviones[]>(this.urlRequest);
  }
  obtenerDetalleVuelo(): Observable<Detalle_Vuelo[]> {
    this.urlRequest = this.url + 'detalle_vuelo';
    return this.httpClient.get<Detalle_Vuelo[]>(this.urlRequest);
  }
  obtenerConsumo(): Observable<Consumo[]> {
    this.urlRequest = this.url + 'consumo';
    return this.httpClient.get<Consumo[]>(this.urlRequest);
  }
  obtenerDetalleConsumo(): Observable<Detalle_Consumo[]> {
    this.urlRequest = this.url + 'detalle_consumo';
    return this.httpClient.get<Detalle_Consumo[]>(this.urlRequest);
  }
  obtenerVuelos(): Observable<Vuelos[]> {
    this.urlRequest = this.url + 'vuelos';
    return this.httpClient.get<Vuelos[]>(this.urlRequest);
  }
  obtenerProducto(): Observable<Producto[]> {
    this.urlRequest = this.url + 'producto';
    return this.httpClient.get<Producto[]>(this.urlRequest);
  }
  obtenerPasajero(): Observable<Pasajero[]> {
    this.urlRequest = this.url + 'pasajero';
    return this.httpClient.get<Pasajero[]>(this.urlRequest);
  }

}

