import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-administrativos-listar-administrativo',
  templateUrl: './listar-administrativo.component.html',
  styleUrls: ['./listar-administrativo.component.scss'],
})
export class AdministrativosListarAdministrativoComponent {
  @ViewChild('agregar', { static: false }) agregar: TemplateRef<any>;
  @ViewChild('modificar', { static: false }) modificar: TemplateRef<any>;
  dtOptions: DataTables.Settings = {};
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
  reactiveForm2: FormGroup;
  modificarDocente: FormGroup;

  constructor(private snackBar: MatSnackBar, private fb: FormBuilder, public dialog: MatDialog) {
    this.reactiveForm2 = this.fb.group({
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
        infoFiltered: '(filtrado de _MAX_ total entradas)',
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
    this.reactiveForm2.controls.codigo.setValue(item.codigo);
    this.reactiveForm2.controls.email.setValue(item.email);
    this.reactiveForm2.controls.nombre.setValue(item.nombre);
    this.reactiveForm2.controls.contrato.setValue(item.contrato);
    this.reactiveForm2.controls.mobile.setValue(item.mobile);
    this.reactiveForm2.patchValue({ cargo: '1' });
    this.reactiveForm2.controls.dependencia.setValue('dependencia');
    this.reactiveForm2.controls.apellido.setValue(item.apellido);
    this.reactiveForm2.controls.estado.setValue(item.estado);

    console.log(this.reactiveForm2);
    this.dialog.open(this.modificar);
  }

  registroExitoso() {
    this.snackBar.open('Registro exitoso!!', '', {
      duration: 3000,
      panelClass: 'snackbarsusses',
    });
  }
}
