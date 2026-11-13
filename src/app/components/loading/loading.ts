import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.html',
  styleUrls: ['./loading.css']
})
export class LoadingComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  setTimeout(() => {
    const rolDelUsuarioQueIngreso = localStorage.getItem('userRole');

    if (rolDelUsuarioQueIngreso === 'Mesero') {
      this.router.navigate(['/pedidos']);
    } else if (rolDelUsuarioQueIngreso === 'Cafetería') {
      this.router.navigate(['/recepcion']);
    } else if (rolDelUsuarioQueIngreso === 'Cocina') {
      this.router.navigate(['/cocina']);
    } else if (rolDelUsuarioQueIngreso === 'Administrador') {
      this.router.navigate(['/inventario']);
    } else {
      this.router.navigate(['/login']); 
    }
  }, 3000);
}
}