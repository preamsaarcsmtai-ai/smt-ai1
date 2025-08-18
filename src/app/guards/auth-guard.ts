import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';


export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(Auth);
  const router = inject(Router);

  const expectedRole = route.data['role'];
  const user = auth.getCurrentUser();

  if(!user || user.role !== expectedRole){
    router.navigate(['/dashboard']);
    return false;
  }
  return true;  
};
