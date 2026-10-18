import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // <-- Importa el Router

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  rolUsuario: string = '';

  constructor(private router: Router) {} 

  ngOnInit() {
    this.rolUsuario = localStorage.getItem('userRole') || 'Usuario';
  }

  cerrarSesion() {
    localStorage.removeItem('userRole'); 
    this.router.navigate(['/login']);    
  }
}