import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewChild, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicesAppService } from '../../../core/services/services-app.service';

@Component({
  selector: 'app-ejes-estrategicos-listar-eje',
  templateUrl: './listar-eje.component.html',
  styleUrls: ['./listar-eje.component.scss'],
})
export class EjesEstrategicosListarEjeComponent {
  @ViewChild('agregar', { static: false }) agregar: TemplateRef<any>;
  @ViewChild('modificar', { static: false }) modificar: TemplateRef<any>;
  dtOptions: DataTables.Settings = {};
  prueba = '2';
  ejes = [
    {
      codigo: '01',
      nombre: 'gabriel',
      estado: 'activo',
      descripcion: 'Esta es una descripción',
    },
    {
      codigo: '01',
      nombre: 'gabriel',
      estado: 'activo',
      descripcion: 'Esta es una descripción',
    },
    {
      codigo: '01',
      nombre: 'gabriel',
      estado: 'activo',
      descripcion: 'Esta es una descripción',
    },
    {
      codigo: '01',
      nombre: 'gabriel',
      estado: 'activo',
      descripcion: 'Esta es una descripción',
    },
  ];
  registrarEjes: FormGroup;
  modificarEjes: FormGroup;

  constructor(
    private provider: ServicesAppService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.registrarEjes = this.fb.group({
      codigo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });

    this.modificarEjes = this.fb.group({
      codigo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
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
  agregarEje() {
    this.dialog.open(this.agregar);
  }

  modificarEjeDialog(item: any) {
    this.modificarEjes.controls.codigo.setValue(item.codigo);
    this.modificarEjes.controls.nombre.setValue(item.nombre);
    this.modificarEjes.controls.descripcion.setValue(item.descripcion);

    console.log(this.modificarEjes);
    this.dialog.open(this.modificar);
  }

  registroExitoso() {
    this.snackBar.open('Registro exitoso!!', '', {
      duration: 3000,
      panelClass: 'snackbarsusses',
    });
  }
  registroFallido() {
    this.snackBar.open('Registro fallido!!', '', {
      duration: 3000,
      panelClass: 'snackbarfail',
    });
  }

  listarEjes() {
    this.provider.ListarEjes().subscribe(
      data => {
        this.registroExitoso();
        this.dialog.closeAll();
      },
      error => {}
    );
  }

  registrarEje() {
    this.provider.registrarEje(this.registrarEjes.controls).subscribe(
      data => {
        this.registroExitoso();
        this.dialog.closeAll();
      },
      error => {
        this.registroFallido();
      }
    );
  }

  modificarEje() {
    this.registroFallido();
    this.provider.modifcarEje(this.registrarEjes.controls).subscribe(
      data => {
        this.registroExitoso();
        this.dialog.closeAll();
      },
      error => {
        this.registroFallido();
      }
    );
  }
}
