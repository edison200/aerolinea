import { Component } from '@angular/core';
import { AerolineaService } from './services/aerolinea.service';
import { Personas,Aeropuerto } from './models/aerolinea.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aerolinea';
  personas: Personas[] = [];
  aeropuertos: Aeropuerto[] = [];
  constructor( private aerloineaService: AerolineaService){}
    ngOnInit(){
     /* this.aerloineaService.obtenerPersonas().subscribe(data => {
        this.personas = data;
        });*/
      this.aerloineaService.obtenerAeropuerto().subscribe(data => {
          this.aeropuertos = data;
          });
    }
}
