import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-docentes-modificar-docente',
  templateUrl: './modificar-docente.component.html',
  styleUrls: ['./modificar-docente.component.scss'],
})
export class DocentesModificarDocenteComponent {
  reactiveForm2: FormGroup;
  constructor(private fb: FormBuilder) {
    this.reactiveForm2 = this.fb.group({
      codigo: ['pedro suerez', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      contrato: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      dependencia: ['', [Validators.required]],
    });
  }
  ngOnInit() {}

  getErrorMessage(form: FormGroup) {
    return form.get('email').hasError('required')
      ? 'Por favor ingresa el correo'
      : form.get('email').hasError('email')
      ? 'Correo no valido'
      : '';
  }
}
