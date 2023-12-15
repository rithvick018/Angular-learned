import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coreModule } from '../common/core.module';
import { HomePageComponent } from './home-page/home-page.component';
// import { CoreModule } from '@angular/flex-layout';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UpsComponent } from './ups/ups.component';
import { UpsRedirectedComponent } from './ups-redirected/ups-redirected.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactUsComponent,
    TicketBookingComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    ConfirmationComponent,
    UpsComponent,
    UpsRedirectedComponent
  ],
  imports: [
    CommonModule,
    coreModule,
    // CoreModule
  ]
})
export class MainModule { }
