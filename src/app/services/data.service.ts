import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  title_service = 'My app from service';
  saludo(){ //metodo no funcion

    const url = 'https://jsonplaceholder.typicode.com/todos';
   return this.http.get<any>(url); // nose

  }
}