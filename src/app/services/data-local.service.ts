import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

registrosGuardados: Registro[] = [];

  constructor() { }

  guardarRegistro( format: string, text: string ) {

    const nuevoRegistro = new Registro( format, text );
    this.registrosGuardados.unshift( nuevoRegistro );
    console.log(this.registrosGuardados);
  }
}
