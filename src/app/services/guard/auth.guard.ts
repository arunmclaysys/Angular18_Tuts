import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const localUsr = localStorage.getItem('empErpUse');
  const router = inject(Router);
  if(localUsr != null) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
