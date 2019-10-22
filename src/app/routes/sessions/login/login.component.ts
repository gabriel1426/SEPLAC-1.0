import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesAppService } from '../../../core/services/services-app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  public credenciales: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private provider: ServicesAppService
  ) {
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    this.provider.iniciarSesion(this.reactiveForm.controls).subscribe(
      data => {
        if (data.status == 'ok') {
          console.log(data.data.access_token);
          localStorage.setItem('usuario', JSON.stringify('data'));
          this.router.navigateByUrl('/dashboard');
        }
      },
      error => {
        this.credenciales = true;
        console.log(error);
      }
    );
  }

  cerrarErrorCredenciales() {
    this.credenciales = false;
  }
}
