import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { TicketBookingComponent } from '../ticket-booking/ticket-booking.component';
import { ConfirmationService } from './confirmation.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<unknown> {

  constructor(private dialogService : ConfirmationService){}
  canDeactivate(
    component: TicketBookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(!component.canDeactivate()){
        return new Observable((observer: Observer<boolean>)=>{
            const dialogRef = this.dialogService.openConfirmationDialog('Are you sure','you have unsaved changes..!');
            dialogRef.afterClosed().pipe(filter((result:boolean)=> {
              return result
            })).subscribe(()=>{
              observer.next(true);
              observer.complete();
            });
          });
      }else{
        return true;
      }
  }
  
}
