export class Producto {
  _id?: number;
  nombreCompleto: string;
  nombreEmpresa: string;
  email: string;
  telefono: string;
  categoria: string;
  mensaje: string;

  constructor(
    nombreCompleto: string,
    nombreEmpresa: string,
    email: string,
    telefono: string,
    categoria: string,
    mensaje: string
  ) {
    this.nombreCompleto = nombreCompleto;
    this.nombreEmpresa = nombreEmpresa;
    this.email = email;
    this.telefono = telefono;
    this.categoria = categoria;
    this.mensaje = mensaje;
  }
}
