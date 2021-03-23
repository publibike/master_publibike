import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
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
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate() {
    const isIntroShowed = await this.storage.get("isIntroShowed");
    if (isIntroShowed) {
      return true;
    } else {
      this.router.navigateByUrl("intro");
    }
  }
  
}
