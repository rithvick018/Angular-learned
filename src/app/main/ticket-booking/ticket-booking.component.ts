import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
// import * as _ from 'lodash';
@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  emailPattern : string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  numberPattern : string = '^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$';
  ticketForm !: FormGroup; 
  columns : any;
  one:string="hello";
  cancelTicket : any;
  movieList : Array<any>=[
    { id: 1, movieTitle: "Jailer"},
    { id: 2, movieTitle: "DD returns"},
    { id: 3, movieTitle: "Beast"},
    { id: 4, movieTitle: "Nayagan"},
    { id: 5, movieTitle: "Vikram"},
  ];
  showTime : Array<any>=[
    { id: 1, time: "09:00"},
    { id: 2, time: "12:00"},
    { id: 3, time: "18:00"},
    { id: 4, time: "22:00 "},
  ]
  seatType : Array<any>=[
    { id: 1, type: "Elite", amount : 300},
    { id: 2, type: "Premium", amount : 200},
    { id: 3, type: "Gold", amount : 150},
    { id: 4, type: "Budget", amount : 100},
  ]
  billDetails : Array<any> = [];
  bill : any = {};
  displayedColumns: string[] = ['id','Name','movieTitle', 'showTime', 'seatType','Amount','Action'];
  dataSource:any;
  constructor( private openDialog : MatDialog) { 
    this.ticketForm = new FormGroup({
      name: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      contactNumber: new FormControl('',[
        Validators.required,
        // Validators.pattern(this.numberPattern)
      ]),
      selectMovie: new FormControl('',[]),
      showTime: new FormControl('',[]),
      seatType: new FormControl('',[]),
      numberOfSeats: new FormControl('',[])
    });
  }
 
  ngOnInit(): void {
    this.dataSource=new MatTableDataSource<any>(this.billDetails);
  }
  bookTicket(){
    if(this.ticketForm.valid){
   
       const seatData = this.seatType.find(item => item.id === this.ticketForm.value.seatType);
      
      const movieData = this.movieList.find(item => item.id === this.ticketForm.value.selectMovie);
     
      const showData = this.showTime.find(item => item.id === this.ticketForm.value.showTime);
       this.billDetails.push({
        id:this.billDetails.length,
        name: this.ticketForm.value.name,
        Amount: seatData.amount * this.ticketForm.value.numberOfSeats,
        seatType: seatData.type,
        movieTitle: movieData.movieTitle,
        showTime: showData.time
       });
       
       this.dataSource=new MatTableDataSource<any>(this.billDetails);
    }
  }
  onEdit(element : JSON){
    this.openDialog.open( EditDialogComponent,{
      data:{
        content: element
      }
    })
  }
  onDelete(id: any){
    const dialogRef = this.openDialog.open(DeleteDialogComponent,{
      data: {content: "Are you sure to cancel ticket?"},
      autoFocus: false
    });
    this.cancelTicket = dialogRef.afterClosed().subscribe({
      next:(res : any)=>{
        if(res){
          this.billDetails.splice(id,1);
          console.log(this.billDetails);

          this.dataSource=new MatTableDataSource<any>(this.billDetails);

        }
      }
    })
  }

  canDeactivate(): boolean{
    return this.ticketForm ? !this.ticketForm.dirty : true;
  }
}
