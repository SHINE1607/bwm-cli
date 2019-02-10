//service created to share the common code between the components


//import  injectable form the angular core to inject ot to the components
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model'

//create the injectable  decoartor for the rental sewrvice class
@Injectable()


//create the services class
export class RentalService{
    //creating a proprty (array) , of any datatype of the class rentalService and storing the data
    //now we have the reantal inside the service and we have to inject inside the components
    private rentals : Rental[] =  [{
        id : "1",
        title : "The oberoi Hotel Mumbai",
        city : "Mumbai",
        location   : "Panama",
        category : "Premium",
        image : "http:/via.placeholder.com/",
        bedrooms : 3,
        description : "Premium hotel suites",
        dailyRate : 5000,
        shared : false,
        createdAt : "16/07/1997",
        rating : 4.7
        },

      {
        id : "2",
        title : "The Taj Hotel Mumbai",
        city : "Mumbai",
        location  : "5km from center",
        category : "Premium",
        image : "http:/via.placeholder.com",
        bedrooms : 2,
        description : "Premium hotel suites",
        dailyRate : 10000,
        shared : false,
        createdAt : "16/07/2000",
        rating : 4.8
    },

      {
        id : "3",
        title : "The Four Seasons Hotel Mumbai",
        city : "Mumbai",
        location : "2.8 km from center",
        category : "Premium",
        image : "http:/via.placeholder.com/",
        bedrooms : 3,
        description : "Premium hotel suites",
        dailyRate : 7500,
        shared : false,
        createdAt : "16/07/1998",
        rating : 4.5
      },

      {
        id : "3",
        title : "Trident Nariman Point",
        city : "Mumbai",
        location : "Panama",
        category : "Premium",
        image : "http:/via.placeholder.com/",
        bedrooms : 3,
        description : "Premium hotel suites",
        dailyRate : 5000,
        shared : false,
        createdAt : "16/07/2007",
        rating : 4.3
      }];

public getRentalById(rentalId : string) : Observable<Rental>{
  
  return new Observable<Rental>((observer) =>{
      setTimeout(() =>{
        //passin the each eleement to check mathch the rental id 
        
        const foundRental = this.rentals.find((rental) => {
            return rental.id == rentalId
        });
        //here we are emitting the data from the service 
        //this is the argument that is apssed on to the subscribe function
        observer.next(foundRental);

        
        
      },200);

      
  });
}
//public and private  are access modifiers

//creating a public  rental method to call from compoennts and  return the rentals data to the compoent
//return type is an observable
public getRentals() : Observable<Rental[]>{
  
      //subscribe method automiatically invokes the observable with observer as the parameter 
      //this is were we recieve the data
      //specifying the rentalObservable to be an observable of type Rental array
      //directlly returning an observable
      return new  Observable<Rental[]>(observer =>{

        setTimeout(() =>{
          console.log(`this is from the get rentals : ${this.rentals}`);
          observer.next(this.rentals)
        },1000);

        setTimeout(() =>{
          observer.error("this is not working")
        },2000);

        setTimeout(() =>{
          //there weont be any arguments for  the .complete method
          observer.complete()
        },3000);

    });
    
}
}