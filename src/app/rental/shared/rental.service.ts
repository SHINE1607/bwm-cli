//import  injectable form the angular core to inject ot to the components
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
//import the http client module to get the data fro the server
import { HttpClient } from '@angular/common/http';
//to share  data between the unrelated components



//create the injectable  decorator for the rental service class
//propoerty decorator for the class
@Injectable()
//create the services class
  export class RentalService{
      $mapClicked = new EventEmitter();
      currentRental: Rental;

      constructor(private http: HttpClient){
        
      }
      
      
    public getRentalById(rentalId : string) : Observable<any>{
      
      //this is the internal request given to the server via the client service 
      //these are  the nd points
      return <Observable<any>> this.http.get('/api/v1/rentals/' + rentalId);
      
    }
    //public and private  are access modifiers

    //creating a public  rental method to call from compoennts and  return the rentals data to the component
    //return type is an observable of any type
    //the json file will bereturned on naking the request 
    public getRentals() : Observable<Rental[]>{
      //making a request for the rental page 
      //returing the observable 
      return  <Observable<Rental[]>> this.http.get('/api/v1/rentals')
}
  //other way is to write the getRentals method
    // public getRentals() : Observable<Rental[]>{
    //   return <Observable<Rental[]>> this.http.get('http://localhost:3001/api/v1/rentals')
    // }
    
 
}