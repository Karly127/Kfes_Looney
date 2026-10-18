import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  const userRole = localStorage.getItem('userRole') || 'Mesero'; 
  
  const allowedRoles = route.data?.['roles'] as Array<string>;

  if (allowedRoles && allowedRoles.includes(userRole)) {
    return true; 
  }

  alert('No tienes permisos para ver esta pantalla');
  router.navigate(['/']);
  return false;
};