import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule }  from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
//components
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { BookDialogComponent } from './rental-detail/book-dialog/book-dialog.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

//pipes
import { NgPipesModule } from 'ngx-pipes';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';


//servoces and routes 
import { RentalService } from './shared/rental.service'
import { Routes, RouterModule } from '@angular/router';

//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

//spinner
import { NgxSpinnerModule } from 'ngx-spinner';


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
     BookDialogComponent,
    

    ],
    exports :[
      LocationDetailComponent,
      MatDatepickerModule
    ],
    //services are indide the providers
    
    imports: [
      RouterModule.forChild(routes),
      CommonModule,
      HttpClientModule,
      NgPipesModule,
      BrowserAnimationsModule,
      MaterialModule,
      MatDialogModule,
      MatDatepickerModule,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatIconModule,
      MatTabsModule,
      MatMomentDateModule,
      NgxSpinnerModule,
      AgmCoreModule.forRoot({
        apiKey:"AIzaSyB7wUVgd60mn4R1QjlVG1gqyPMNP-nQ6HQ"
      }),

      

      
    ],
    //services are to be inside the providers 
    providers: [
              RentalService],
    entryComponents : [ LocationDetailComponent, BookDialogComponent ]
      //RouterModule.forRoot fucnction will be automatically called when there is a change in the url with routes arra
    
    
    
  })
  //this module needs to be imported inside the appmodule
export class RentalModule{

} 