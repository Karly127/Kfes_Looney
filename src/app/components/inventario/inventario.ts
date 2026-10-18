import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css'
})
export class InventarioComponent {
  ingredientes = [
    { nombre: 'Café arábica', cantidad: '2.8 kg disponibles', porcentaje: 60, estado: 'Óptimo', color: '#1e8449' },
    { nombre: 'Leche entera', cantidad: '8.5 L disponibles', porcentaje: 30, estado: 'Por reponer', color: '#b7950b' },
    { nombre: 'Chocolate', cantidad: '1.2 kg disponibles', porcentaje: 15, estado: 'Bajo', color: '#c0392b' },
    { nombre: 'Pan brioche', cantidad: '18 pzas disponibles', porcentaje: 40, estado: 'Óptimo', color: '#1e8449' }
  ];
}