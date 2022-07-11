import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //no es necesario pero sirve par q este disponible default en todos los componentes y no tener q hacerlo de forma manual
})
export class AuthService {

  constructor() { }
  holaDesdeAuth= 'Hola desde Auth';
}