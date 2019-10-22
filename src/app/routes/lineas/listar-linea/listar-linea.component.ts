import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lineas-listar-linea',
  templateUrl: './listar-linea.component.html',
  styleUrls: ['./listar-linea.component.scss'],
})
export class LineasListarLineaComponent {
  @ViewChild('agregar', { static: false }) agregar: TemplateRef<any>;
  @ViewChild('modificar', { static: false }) modificar: TemplateRef<any>;
  dtOptions: DataTables.Settings = {};
  prueba = '2';
  lineas = [
    {
      codigo: '01',
      nombre: 'gabriel',
      descripcion: 'descripcion de la linea 1',
      estado: 'activo',
    },
    {
      codigo: '01',
      nombre: 'gabriel',
      descripcion: 'descripcion de la linea 2',
      estado: 'activo',
    },
    {
      codigo: '01',
      nombre: 'gabriel',
      descripcion: 'descripcion de la linea 3',
      estado: 'activo',
    },
    {
      codigo: '01',
      nombre: 'gabriel',
      descripcion: 'descripcion de la linea 4',
      estado: 'activo',
    },
  ];
  registrarLinea: FormGroup;
  modificarLinea: FormGroup;

  constructor(private snackBar: MatSnackBar, private fb: FormBuilder, public dialog: MatDialog) {
    this.registrarLinea = this.fb.group({
      codigo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });

    this.modificarLinea = this.fb.group({
      codigo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
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
  agregarLinea() {
    this.dialog.open(this.agregar);
  }

  modificarLineaDialog(item: any) {
    this.modificarLinea.controls.codigo.setValue(item.codigo);
    this.modificarLinea.controls.nombre.setValue(item.nombre);
    this.modificarLinea.controls.descripcion.setValue(item.descripcion);

    console.log(this.modificarLinea);
    this.dialog.open(this.modificar);
  }

  registroExitoso() {
    this.snackBar.open('Registro exitoso!!', '', {
      duration: 3000,
      panelClass: 'snackbarsusses',
    });
  }
}
