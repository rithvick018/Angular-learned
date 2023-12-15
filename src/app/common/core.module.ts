import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, }  from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { AnimationComponent } from './components/animation/animation.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    NavBarComponent,
    TestComponent,
    AnimationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    RouterModule,
    MatDialogModule
    // AuthModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    RouterModule,
    NavBarComponent,
    MatDialogModule
  ],
  providers:[
    HttpService
  ]
})
export class coreModule { }
