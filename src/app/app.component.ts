import { Component } from '@angular/core';
import {Estatus} from './estatus'
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  estatus:Estatus={

  }
  constructor(private http: HttpClient) {
  }
  enviar(){
    console.log("Aun nada");

    const headers = new HttpHeaders({
      'Authorization' : 'Basic ' + btoa('rob:rob')}) ;

  this.http.get<Estatus>('http://localhost:9000',{headers:headers}).subscribe(respuesta=>{this.estatus=respuesta });
  

  setTimeout(() => {
    console.log("LLego "+this.estatus.mensaje)
  }, 1300);
}
}