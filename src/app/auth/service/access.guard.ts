import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivateChild {
  routerArray = [
    {id:1, routerName: "/app"},
    {id:2, routerName: "/app/about"},
    {id:3, routerName: "/app/contact"},
    {id:4, routerName: "/app/ticketbooking"}
  ]
  constructor( private Router: Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("requested url:",state.url);
      
      const index = this.routerArray.findIndex(item => item.routerName == state.url);
      if( index !== -1){
        return true;
      }else{
        alert("You are not permitted.!");
        this.Router.navigate(['/login']);
        return false;

      }
  }
  
}
