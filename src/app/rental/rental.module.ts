import { NgModule } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
// importing the ngxpipe module
import { NgPipesModule } from 'ngx-pipes';
//importing the custom pipe
import { UppercasePipe } from '../common/pipes/uppercase.pipe';
//importing the http client module to request the data from the server
import { HttpClientModule } from '@angular/common/http';

//importing the module for popup window

import { CommonModule } from '@angular/common';
//import rental service 
import { RentalService } from './shared/rental.service'
import { Routes, RouterModule} from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
//anagular mayterials modules
//modules impoerted ==> browserAnimatiosnModule, NoopAnimationsMoulde, 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


//importing the aguylar api
import { MaterialModule } from './material/material.module';
import { LocationDetailComponent } from './location-detail/location-detail.component';

import { AgmCoreModule }  from '@agm/core'; 



//needed in all modules that contain routing pages 
const routes: Routes = [
  //rental component wil be loaded on path ="" or "rentals"  
  {path : 'rentals', component: RentalComponent,
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
     RentalDetailComponent,
     UppercasePipe,
     LocationDetailComponent,

     
     
     
    ],
    exports :[
      LocationDetailComponent
    ],
    //services are indide the providers
    
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
      HttpClientModule,
      NgPipesModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MaterialModule,
      AgmCoreModule.forRoot({
        apiKey:"AIzaSyB7wUVgd60mn4R1QjlVG1gqyPMNP-nQ6HQ"
      }),

      

      
    ],
    //services are to be inside the providers 
    providers: [RentalService],
    entryComponents : [LocationDetailComponent]
      //RouterModule.forRoot fucnction will be automatically called when there is a change in the url with routes arra
    
    
    
  })
  //this module needs to be imported inside the appmodule
export class RentalModule{

} 