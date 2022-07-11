import { Component, VERSION, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import {DataService} from './services/data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [AuthService]//no es necesario, pero el service es solo utilizable en este componente, de manera manual
})
export class AppComponent implements OnInit  {
  constructor(private data: DataService, private auth: AuthService){}
  name = 'Domini';
  posts: any = '';
  ngOnInit(){
this.name = this.auth.holaDesdeAuth;
this.posts = this.data.saludo().subscribe(res=>console.log(res));  } //nose
}
