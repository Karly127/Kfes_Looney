import { LoginComponent } from './components/login/login';
import { LoadingComponent } from './components/loading/loading';
import { RecepcionComponent } from './components/recepcion/recepcion';
import { CobroComponent } from './components/cobro/cobro';
import { InventarioComponent } from './components/inventario/inventario';
import { PedidosComponent } from './components/pedidos/pedidos';
import { roleGuard } from './core/guards/role-guard';
import { Routes } from '@angular/router';
import { CocinaComponent } from './components/cocina/cocina'; 

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'loading', component: LoadingComponent },
  
  // Mesero y Admin
  { path: 'pedidos', component: PedidosComponent, canActivate: [roleGuard], data: { roles: ['Mesero', 'Administrador'] } },
  
  // Cafetería y Admin
  { path: 'recepcion', component: RecepcionComponent, canActivate: [roleGuard], data: { roles: ['Cafetería', 'Administrador'] } },
  
  // Cocina y Admin (Nueva ruta)
  { path: 'cocina', component: CocinaComponent, canActivate: [roleGuard], data: { roles: ['Cocina', 'Administrador'] } },
  
  // SOLO Cafetería y Admin (Cocina queda excluido automáticamente)
  { path: 'cobro', component: CobroComponent, canActivate: [roleGuard], data: { roles: ['Cafetería', 'Administrador'] } },
  
  // Solo Admin
  { path: 'inventario', component: InventarioComponent, canActivate: [roleGuard], data: { roles: ['Administrador'] } }
];