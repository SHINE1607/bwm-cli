import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental }  from  '../shared/rental.model' ;
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})


export class RentalListComponent implements OnInit {
  //creatin a prpoerty of the class and storing the data
  rentals:Rental[] = [];
   

  //create ann instance of the rentalService class in the constructor
  constructor(
    private rentalService : RentalService,
    private spinner : NgxSpinnerService) { }

  ngOnInit() {
    
    //call the getRental from the rentalService class and storig the data inside the rentals array and we are recieving the rentalObservable
    const rentalObservable = this.rentalService.getRentals();

    rentalObservable.subscribe(
      
      (rentals : Rental[]) =>{
        //storing the rentals recieced from the observer to this.rentals

        this.rentals = rentals;
        //now because we are having the rental model array, we can have information of the each elemet and its properties
      },
      (err) =>{
        console.log(err+ 'this is the error obtained!!');
      },
      () =>{

        console.log()

      }
    )
  }

}
