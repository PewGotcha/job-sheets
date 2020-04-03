import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanEnterTabsGuard implements CanActivate {

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {

  }
  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    stateSnapshot: RouterStateSnapshot) {
    return this._angularFireAuth.authState.pipe(

      map((auth) => {
        if (!auth) {
          this._router.navigate(["/login"]);
          return false;
        } else {
          return true;
        }

      })
    );
  }

}
