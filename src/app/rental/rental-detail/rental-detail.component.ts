import { Component, OnInit, Inject } from '@angular/core';
import { RentalService  } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
import { ActivatedRoute } from '@angular/router'; 
import { Observable } from 'rxjs';   
//nagul;r material module impoerts 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

//angularmaterial modules 




@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  public rental : Rental;
  public show:boolean = false;
  public loader:boolean =  false;
  //injecting the RentalService and activated Routes to the constructor
  constructor( private route : ActivatedRoute, 
    private rentalService : RentalService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService ) {}
    
    openDialog(): void {
      const dialogRef = this.dialog.open( BookDialogComponent, {
   
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
      });
    }
  

  
  

  ngOnInit() {
    setTimeout(() =>{
      this.spinner.show();

        this.route.params.subscribe(

          params => {
            this.rentalService.currentRental = params.rentalId;
            //on calling this function the thgis.rental will be be stored with the current selected rental
            this.getRental(params.rentalId);
          }
        )

      this.loader = true;
      this.timer();
      
    }, 0)
    
  }

  timer(){
    this.show = false;
    setTimeout(() => {
      if(this.loader == true){
        this.show = true;
      }
    }, 5000);
  }

  LoadSpecEnd(){
    this.spinner.hide();
    this.loader = false;
    
  }



 
  getRental( rentalId : string ) {
    this.rentalService.getRentalById(rentalId).subscribe(
      //rental is the returned observable from the getRentalById function 
      
      (rental : Rental) => {
        //storing the current rental emitted by the observable to the rental property of the constructor 
        this.rental = rental;
        this.LoadSpecEnd();
        console.log(this.spinner);

        this.rentalService.currentRental = rental;
        
        
      });
  }
}


