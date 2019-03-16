import { Component, OnInit, Inject } from '@angular/core';
import { RentalService  } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

import { ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';   
//nagul;r material module impoerts 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LocationDetailComponent } from '../location-detail/location-detail.component';


//angularmaterial modules 




@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
 
  rental : Rental;
  //injecting the RentalService and activated Routes to the constructor
  constructor( private route : ActivatedRoute, 
    private rentalService : RentalService,
    public dialog: MatDialog ) { 

  }
    

  ngOnInit() {
    //this will be automatically executed
    this.route.params.subscribe(
      params => {
        //on calling this function the thgis.rental will be be stored with the current selected rental
        this.getRental(params.rentalId);
      }
    )
  }

 
  getRental( rentalId : string ) {
    console.log(this.rentalService.getRentalById(rentalId));
    this.rentalService.getRentalById(rentalId).subscribe(
      //rental is the returned observable from the getRentalById function 
      
      (rental : Rental) => {
        console.log('fuk')
        //storing the current rental emitted by the observable to the rental property of the constructor 
        this.rental = rental;
        console.log(this.rental);
      });
  }
  mapPopup(){
    this.dialog.open(LocationDetailComponent);
  }

}


