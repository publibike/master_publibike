import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

<<<<<<< HEAD
//@Injectable({
//  providedIn: 'root'
//})
=======
// @Injectable({
//   providedIn: 'root'
// })
>>>>>>> bbebfeb6b81e361fbddb641de4265c9fa555cfef
export class LoginGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) { }
  async canActivate() {
    const isUserLoggedIn = await this.storage.get("isUserLoggedIn");
    if (isUserLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl("login");
    }
  }

}
