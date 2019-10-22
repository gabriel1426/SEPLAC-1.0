import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-docentes-listar-docente',
  templateUrl: './listar-docente.component.html',
  styleUrls: ['./listar-docente.component.scss'],
})
export class DocentesListarDocenteComponent {
  @ViewChild('agregar', { static: false }) agregar: TemplateRef<any>;
  @ViewChild('modificar', { static: false }) modificar: TemplateRef<any>;
  dtOptions: any = {};

  prueba = '2';
  docentes = [
    {
      codigo: '01',
      email: 'gabriel@gabriel.com',
      nombre: 'gabriel',
      contrato: 'Tiempo Completo',
      mobile: '12321321',
      cargo: 'Ingeniero',
      dependencia: 'Sistemas',
      apellido: 'Contreras',
      estado: 'activo',
    },
    {
      codigo: '01',
      email: 'gabriel@gabriel.com',
      nombre: 'gabriel',
      contrato: 'Tiempo Completo',
      mobile: '12321321',
      cargo: 'Ingeniero',
      dependencia: 'Sistemas',
      apellido: 'Contreras',
      estado: 'activo',
    },
    {
      codigo: '01',
      email: 'gabriel@gabriel.com',
      nombre: 'gabriel',
      contrato: 'Tiempo Completo',
      mobile: '12321321',
      cargo: 'Ingeniero',
      dependencia: 'Sistemas',
      apellido: 'Contreras',
      estado: 'activo',
    },
    {
      codigo: '01',
      email: 'gabriel@gabriel.com',
      nombre: 'gabriel',
      contrato: 'Tiempo Completo',
      mobile: '12321321',
      cargo: 'Ingeniero',
      dependencia: 'Sistemas',
      apellido: 'Contreras',
      estado: 'activo',
    },
  ];
  registrarDocente: FormGroup;
  modificarDocente: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.dtOptions = {
      ajax: 'data/data.json',

      // Use this attribute to enable the responsive extension
      responsive: true,
    };
    this.registrarDocente = this.fb.group({
      codigo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      contrato: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      dependencia: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });

    this.modificarDocente = this.fb.group({
      codigo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      contrato: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      dependencia: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });
    this.tabla();
  }

  getErrorMessage(form: FormGroup) {
    return form.get('email').hasError('required')
      ? 'Por favor ingresa el correo'
      : form.get('email').hasError('email')
      ? 'Correo no valido'
      : '';
  }

  tabla(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',

      language: {
        emptyTable: 'No hay datos disponibles en la tabla',
        info: 'Mostrando  _START_ a _END_ de _TOTAL_ entradas',
        infoEmpty: 'Mostrando  0 a 0 de 0 entradas',
        infoFiltered: '(fX_ iltrado de _MAtotal entradas)',
        infoPostFix: '',
        thousands: ',',
        lengthMenu: 'Mostrar _MENU_ entradas',
        loadingRecords: 'Cargando...',
        processing: 'Procesando...',
        search: 'Buscar:',
        zeroRecords: 'No se encontraron registros coincidentes',
        paginate: {
          first: 'Primero',
          last: 'Ultimo',
          next: 'Sig.',
          previous: 'Ant.',
        },
        aria: {
          sortAscending: ': activar para ordenar la columna ascendente',
          sortDescending: ': activar para ordenar la columna descendente',
        },
      },
    };
  }
  agregarDocente() {
    this.dialog.open(this.agregar);
  }

  modificarDocenteDialog(item: any) {
    this.modificarDocente.controls.codigo.setValue(item.codigo);
    this.modificarDocente.controls.email.setValue(item.email);
    this.modificarDocente.controls.nombre.setValue(item.nombre);
    this.modificarDocente.controls.contrato.setValue(item.contrato);
    this.modificarDocente.controls.mobile.setValue(item.mobile);
    this.modificarDocente.patchValue({ cargo: '1' });
    this.modificarDocente.controls.dependencia.setValue('dependencia');
    this.modificarDocente.controls.apellido.setValue(item.apellido);
    this.modificarDocente.controls.estado.setValue(item.estado);

    console.log(this.modificarDocente);
    this.dialog.open(this.modificar);
  }

  registroExitoso() {
    this.snackBar.open('Registro exitoso!!', '', {
      duration: 3000,
      panelClass: 'snackbarsusses',
    });
  }
}
