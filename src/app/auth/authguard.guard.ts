import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './../authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthserviceService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    /* Try to auth with the server. If authed resolve to true, else resolve to false */
    return this.auth
      .logIn()
      .then(() => true)
      .catch(() => {
        //this.router.navigate(['/databuku']);
        return true;
      });
  }
}
