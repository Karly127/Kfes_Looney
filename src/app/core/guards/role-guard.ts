import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  const userRole = localStorage.getItem('userRole') || '';
  const allowedRoles = route.data?.['roles'] as Array<string>;

  // Validamos si el rol del usuario está permitido
  if (allowedRoles && allowedRoles.includes(userRole)) {
    return true;
  }

  // CORRECCIÓN EXTRA: Si en el login guardaste 'Trabajador' pero la ruta pide 'Cafetería'
  if (userRole === 'Trabajador' && allowedRoles && allowedRoles.includes('Cafetería')) {
    return true;
  }

  alert('No tienes permisos para ver esta pantalla');
  router.navigate(['/login']);
  return false;
};