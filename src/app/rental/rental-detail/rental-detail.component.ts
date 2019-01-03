import { Component, OnInit } from '@angular/core';
import { RentalService  } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

import { ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';   
@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
 
  rental : Rental;
  //injecting the RentalService and activated Routes to the constructor
  constructor( private route : ActivatedRoute, private rentalService : RentalService ) { 

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
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental : Rental) => {
        console.log(rental);
        //storing the current rental emitted by the observable to the rental property of the constructor 
        this.rental = rental;
      });
  }

}
