import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  ingresarAlSistema() {
    localStorage.setItem('userRole', this.usuarioSeleccionado);
    this.router.navigate(['/loading']);
  }

  usuarioSeleccionado: string = 'Administrador'; // Selecciona el primero por defecto

  seleccionarUsuario(tipo: string) {
    this.usuarioSeleccionado = tipo;
  }
}