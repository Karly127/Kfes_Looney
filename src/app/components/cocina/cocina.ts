import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './cocina.html',
  styleUrl: './cocina.css'
})
export class CocinaComponent {
  // Por ahora dejamos datos de prueba idénticos, luego los separaremos
  pedidos = [
    { id: 1, mesa: 4, tiempo: 'Hace 2 min', estado: 'Nuevo', productos: ['2 Hamburguesas', '1 Papas grandes'], nota: 'Sin cebolla' },
    { id: 2, mesa: 2, tiempo: 'Hace 8 min', estado: 'Preparando', productos: ['1 Hot dog', '1 Alitas BBQ'] }
  ];

  get nuevos() { return this.pedidos.filter(p => p.estado === 'Nuevo'); }
  get preparando() { return this.pedidos.filter(p => p.estado === 'Preparando'); }
  get listos() { return this.pedidos.filter(p => p.estado === 'Listo'); }

  cambiarEstado(pedido: any, nuevoEstado: string) {
    pedido.estado = nuevoEstado;
  }
}