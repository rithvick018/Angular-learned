import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBookingComponent } from './ticket-booking.component';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';


class mockMatdialog{
  open(){

  }
}
describe('TicketBookingComponent', () => {
  let component: TicketBookingComponent;
  let fixture: ComponentFixture<TicketBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketBookingComponent ],
      providers:[
        {provide:MatDialog, useClass: mockMatdialog}
      ],
      imports:[MatFormFieldModule,ReactiveFormsModule,MatInputModule,BrowserAnimationsModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should call bookTicket', () => {
  //   component.ticketForm = new FormGroup({
  //     name: new FormControl('rithvick'),
  //     email: new FormControl('rithvick@gmail.com'),
  //     contactNumber: new FormControl('987654321'),
  //     selectMovie: new FormControl(2),
  //     showTime:new FormControl('09:00'),
  //     seatType:new FormControl(1),
  //     numberOfSeats:new FormControl(2),
  //   })
  //   component.bookTicket();
  //   expect(component.bookTicket).toBeDefined();
  // });
});
