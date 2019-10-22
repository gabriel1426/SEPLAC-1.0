import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-departamento-listasDepartamento',
  templateUrl: './listas-departamento.component.html',
  styleUrls: ['./listas-departamento.component.scss']
})
export class DepartamentoListasDepartamentoComponent {
  @ViewChild('agregar', { static: false }) agregar: TemplateRef<any>;
  @ViewChild('modificar', { static: false }) modificar: TemplateRef<any>;
  dtOptions: DataTables.Settings = {};
  prueba = '2';
  departamentos = [
    {
      codigo: '01',
      nombre: 'gabriel',
      descripcion: 'descripcion de la Departamento 1',
      estado: 'activo',
    },
    {
      codigo: '01',
      nombre: 'gabriel',
      descripcion: 'descripcion de la Departamento 2',
      estado: 'activo',
    },
    {
      codigo: '01',
      nombre: 'gabriel',
      descripcion: 'descripcion de la Departamento 3',
      estado: 'activo',
    },
    {
      codigo: '01',
      nombre: 'gabriel',
      descripcion: 'descripcion de la Departamento 4',
      estado: 'activo',
    },
  ];
  registrarDepartamento: FormGroup;
  modificarDepartamento: FormGroup;

  constructor(private snackBar: MatSnackBar, private fb: FormBuilder, public dialog: MatDialog) {
    this.registrarDepartamento = this.fb.group({
      codigo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });

    this.modificarDepartamento = this.fb.group({
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
  agregarDepartamento() {
    this.dialog.open(this.agregar);
  }

  modificarDepartamentoDialog(item: any) {
    this.modificarDepartamento.controls.codigo.setValue(item.codigo);
    this.modificarDepartamento.controls.nombre.setValue(item.nombre);
    this.modificarDepartamento.controls.descripcion.setValue(item.descripcion);

    console.log(this.modificarDepartamento);
    this.dialog.open(this.modificar);
  }

  registroExitoso() {
    this.snackBar.open('Registro exitoso!!', '', {
      duration: 3000,
      panelClass: 'snackbarsusses',
    });
  }
}
