import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-formulario-contactos',
  templateUrl: './formulario-contactos.component.html',
  styleUrls: ['./formulario-contactos.component.css'],
})
export class FormularioContactosComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Contacto de soporte !';
  emailPattern: any =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  textPattern: any = '[a-zA-Z ]{2,254}';
  numberPattern: any = '^[0-9]*$';

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private _productoService: ProductoService
  ) {
    this.productoForm = this.fb.group({
      nombreCompleto: [
        '',
        [Validators.required, Validators.pattern(this.textPattern)],
      ],
      nombreEmpresa: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      telefono: [
        '',
        [
          Validators.required,
          Validators.pattern(this.numberPattern),
          Validators.minLength(10),
        ],
      ],
      categoria: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  agregarContacto() {
    const PRODUCTO: Producto = {
      nombreCompleto: this.productoForm.get('nombreCompleto')?.value,
      nombreEmpresa: this.productoForm.get('nombreEmpresa')?.value,
      email: this.productoForm.get('email')?.value,
      telefono: this.productoForm.get('telefono')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      mensaje: this.productoForm.get('mensaje')?.value,
    };

    this._productoService.guardarProducto(PRODUCTO).subscribe(
      (data) => {
        this.toastr.success(
          'Los datos fueron registrados con Èxito.',
          'Datos Registrados'
        );
        this.productoForm.reset();
      },
      (error) => {
        console.log(error);
        this.productoForm.reset();
      }
    );
  }
}
