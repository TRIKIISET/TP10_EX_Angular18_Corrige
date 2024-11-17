import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const teacherGuard: CanActivateFn = (route, state) => {
  let espace = localStorage.getItem('espace');
  let  router: Router= inject(Router);
  if(espace=="teacher")
    return true;
  else{
   router.navigate(['/extranet']);
    return false;
  }
};
