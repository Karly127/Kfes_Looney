import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar'; 

@Component({
  selector: 'app-recepcion',
  standalone: true,
  imports: [CommonModule, Sidebar], 
  templateUrl: './recepcion.html',
  styleUrl: './recepcion.css'
})
export class RecepcionComponent {
  pedidos = [
    { id: 1, mesa: 4, tiempo: 'Hace 2 min', estado: 'Nuevo', productos: ['2 Capuchinos', '1 Croissant', '1 Pastel de limón'], nota: 'uno con leche deslactosada' },
    { id: 2, mesa: 2, tiempo: 'Hace 8 min', estado: 'Preparando', productos: ['1 Chilaquiles', '2 Americanos'] },
    { id: 3, mesa: 7, tiempo: 'Hace 14 min', estado: 'Preparando', productos: ['2 Latte vainilla', '1 Molletes'] },
    { id: 4, mesa: 1, tiempo: 'Hace 18 min', estado: 'Listo', productos: ['1 Espresso', '1 Pan dulce'] }
  ];

  get nuevos() { return this.pedidos.filter(p => p.estado === 'Nuevo'); }
  get preparando() { return this.pedidos.filter(p => p.estado === 'Preparando'); }
  get listos() { return this.pedidos.filter(p => p.estado === 'Listo'); }

  cambiarEstado(pedido: any, nuevoEstado: string) {
    pedido.estado = nuevoEstado;
  }
}