import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login';
import { LoadingComponent } from './components/loading/loading';
import { RecepcionComponent } from './components/recepcion/recepcion';
import { CobroComponent } from './components/cobro/cobro';
import { InventarioComponent } from './components/inventario/inventario';
import { PedidosComponent } from './components/pedidos/pedidos';
import { roleGuard } from './core/guards/role-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'loading', component: LoadingComponent },
  
  // Rutas principales por rol
  { path: 'pedidos', component: PedidosComponent, canActivate: [roleGuard], data: { roles: ['Mesero', 'Administrador'] } },
  { path: 'recepcion', component: RecepcionComponent, canActivate: [roleGuard], data: { roles: ['Trabajador', 'Administrador'] } },
  { path: 'cobro', component: CobroComponent, canActivate: [roleGuard], data: { roles: ['Trabajador', 'Administrador'] } },
  { path: 'inventario', component: InventarioComponent, canActivate: [roleGuard], data: { roles: ['Administrador'] } }
];