import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServicesAppService {
  public urlBase = 'https://apiseplac.herokuapp.com';
  constructor(private http: HttpClient) {}

  /*
  /
  /Servicio de Inicio de sesion
  /
  */

  obtenerToken(): string {
    return JSON.parse(localStorage.getItem('token'));
  }

  iniciarSesion(data: any): Observable<any> {
    console.log(data);
    return this.http.post(
      this.urlBase + '/api/auth/login',
      {
        email: data.email.value,
        password: data.password.value,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  //
  //
  // Gestion de ejes
  //
  //

  // Metodo utilizada para consumir el servicio de listar los ejes estrategicos
  ListarEjes(): Observable<any> {
    var token = this.obtenerToken();
    return this.http.get(this.urlBase + '', {
      headers: { Authenticator: token, 'Content-Type': 'application/json' },
    });
  }

  // Metodo utilizada para consumir el servicio de listar los ejes estrategicos
  registrarEje(data: any): Observable<any> {
    var token = this.obtenerToken();
    console.log(data);
    return this.http.post(this.urlBase + '', data, {
      headers: { Authenticator: token, 'Content-Type': 'application/json' },
    });
  }

  // Metodo utilizada para consumir el servicio de listar los ejes estrategicos
  modifcarEje(data: any): Observable<any> {
    var token = this.obtenerToken();
    console.log(data);
    return this.http.put(this.urlBase + '', data, {
      headers: { Authenticator: token, 'Content-Type': 'application/json' },
    });
  }
}
