import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CanEnterLoginPageGuard implements CanActivate {

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
        if (auth) {
          this._router.navigate(["/tabs"]);
          return false;
        } else {
          return true;
        }

      })
    );
  }

}

