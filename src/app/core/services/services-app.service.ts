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
  constructor(private http: HttpClient) {}

  /*
  /
  /Servicio de Inicio de sesion
  /
  */

  iniciarSesion(data: any): Observable<any> {
    return this.http.post(
      'https://apiseplac.herokuapp.com/api/auth/login',
      {
        email: data.email.value,
        password: data.password.value,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
