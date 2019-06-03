import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { RentalService } from '../../shared/rental.service';
import { RentalDetailComponent } from '../rental-detail.component';
import { Rental } from '../../shared/rental.model';


import * as moment from 'moment';

@Component({
  selector: 'bwm-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css'],
  providers: [
    
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class BookDialogComponent implements OnInit {
  //declaring the the form controls and referces
  currentRental : Rental;
  DateFormData = new FormGroup({
    startDate: new FormControl(moment(), [Validators.required]),
    endDate : new FormControl(moment(), [Validators.required])
  });

  minDate = new Date();
  minEndDate = new Date();
  

  constructor(
    public dialogRef: MatDialogRef<RentalDetailComponent>,
    public rentalService : RentalService,
    private route : ActivatedRoute,
    private spinner : NgxSpinnerService) {}

  onNoClick(): void {
    this.dialogRef.close();
    
  }

  ngOnInit() {
    this.currentRental = this.rentalService.currentRental;
    }


  console(){
    // console.log(this.DateFormData.value.startDate._i);
    // console.log(this.DateFormData.value.endDate);
    // console.log(typeof(this.DateFormData.value.startDate))

  }
}
