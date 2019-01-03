import  { NgModule } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
//import rental service 
import { RentalService } from './shared/rental.service'
import { Routes, RouterModule} from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';


const routes: Routes = [
  //rental component wil be loaded on path ="" or "rentals"  
  {path : 'rentals', 
  component: RentalComponent,
  children : [
    { path : "", component: RentalListComponent },
    { path : ":rentalId", component : RentalDetailComponent }
    
  ] }

]

@NgModule({
    declarations: [
     //here we declare the components inside the rental components
     RentalListComponent,
     RentalListItemComponent,
     RentalComponent,
     RentalDetailComponent
     

    ],
    //services are indide the providers
    
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
      
    ],
    //services are to be inside the providers 
    providers: [RentalService]
      //RouterModule.forRoot fucnction will be automatically called when there is a change in the url with routes arra
    
    
    
  })
  //this module needs to be imported inside the appmodule
export class RentalModule{

} 