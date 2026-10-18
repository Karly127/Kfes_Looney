import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule, Sidebar],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css'
})
export class PedidosComponent {
  mesas = [1, 2, 3, 4, 5, 6, 7, 8];
  mesaSeleccionada = 4;
  categorias = ['Todos', 'Café', 'Bebidas', 'Desayunos', 'Panadería'];
  categoriaActiva = 'Todos';

  productos = [
    { nombre: 'Capuchino', precio: 52, categoria: 'Café' },
    { nombre: 'Latte vainilla', precio: 58, categoria: 'Café' },
    { nombre: 'Americano', precio: 38, categoria: 'Café' },
    { nombre: 'Croissant', precio: 42, categoria: 'Panadería' },
    { nombre: 'Chilaquiles', precio: 96, categoria: 'Desayunos' },
    { nombre: 'Pastel de limón', precio: 64, categoria: 'Panadería' }
  ];

  orden: any[] = [
    { cantidad: 2, nombre: 'Capuchino', precio: 52, total: 104 },
    { cantidad: 1, nombre: 'Croissant', precio: 42, total: 42 },
    { cantidad: 1, nombre: 'Pastel de limón', precio: 64, total: 64 }
  ];

  notaComanda = 'Un capuchino con leche deslactosada.';

  get totalOrden() {
    return this.orden.reduce((sum, item) => sum + item.total, 0);
  }

  seleccionarMesa(mesa: number) { this.mesaSeleccionada = mesa; }
  seleccionarCategoria(cat: string) { this.categoriaActiva = cat; }
  
  agregarProducto(producto: any) {
    const item = this.orden.find(i => i.nombre === producto.nombre);
    if (item) {
      item.cantidad++;
      item.total = item.cantidad * item.precio;
    } else {
      this.orden.push({ cantidad: 1, nombre: producto.nombre, precio: producto.precio, total: producto.precio });
    }
  }
}