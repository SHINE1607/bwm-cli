//app module is where we are importing and refencing all the components that are required to run the application
//here the aap.module ts is converted to js code which is complide by the browser compiler.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//to establish the routing 
//for usiing angular routing service we need to import it from the directory
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//here we are importing the component to the app module or the main module
import { HeaderComponent} from './common/header/header.component';
import { LandingComponent } from './landing/landing.component' 
//importing the rental module from the rental component
import { RentalModule } from './rental/rental.module';
import { AuthModule } from './auth/auth.module' 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';




//creating the routes
//When the browser's URL changes, that router looks for a corresponding Route from which it can determine the component to display.
//each routing is an object
const routes: Routes = [
 { path : "", component : LandingComponent},
  // { path : "", redirectTo : "/rentals",  pathMatch : "full" }

  
]

@NgModule({
  declarations: [
    AppComponent,
    //here we are refencing the header component to use it in the app component 
    HeaderComponent, 
    LandingComponent, 

  ],
  imports: [
    //RouterModule.forRoot fucnction will be automatically called when there is a change in the url with routes array 
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    RentalModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
