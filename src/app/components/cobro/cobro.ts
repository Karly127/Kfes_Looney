import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar'; 

@Component({
  selector: 'app-cobro',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './cobro.html',
  styleUrl: './cobro.css'
})
export class CobroComponent {
  mesas = [
    { num: 4, total: 210.00, ticket: 'NV-1048 - 13:42', estado: 'Pendiente' },
    { num: 6, total: 184.00, ticket: 'NV-1047 - 13:42', estado: 'Pendiente' },
    { num: 2, total: 328.00, ticket: 'NV-1046 - 13:42', estado: 'Pagado' },
    { num: 7, total: 176.00, ticket: 'NV-1045 - 13:42', estado: 'Pagado' }
  ];

  mesaSeleccionada = 4;
  metodoPago = 'Efectivo';

  seleccionarMesa(num: number) { this.mesaSeleccionada = num; }
  seleccionarMetodo(metodo: string) { this.metodoPago = metodo; }
}