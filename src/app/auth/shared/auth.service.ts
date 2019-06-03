//import  injectable form the angular core to inject ot to the components
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
//to use the .map function
import { map } from 'rxjs/operators';
// her a ll the function in  the library can be accessed thrioght jwt
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
const jwt = new JwtHelperService();

//to share  data between the unrelated components


@Injectable()


  export class AuthService{ 
    public decodedToken;
    errorResponseRegister: string;
    errorResponseLogin : string;
    notifyMessage : string;
      constructor(private http: HttpClient){
        this.decodedToken = JSON.parse(localStorage.getItem('loginToken_meta'))
      }
      
      
      //fubtion to store the yoken in the loacl storage of the browser
      private saveToken = (token) =>{

        this.decodedToken = jwt.decodeToken(token);
        //credentials are recvived from the userv and stored as tokens in the local storage of the browser 
          //storing the token the loca; storage 
        localStorage.setItem('loginToken', JSON.stringify(token));
        //storing the decodedtoken in the local  storage 
        localStorage.setItem('loginToken_meta', JSON.stringify(this.decodedToken));
        console.log(localStorage.loginToken_meta);
        //returinig thr token to the POST method
        return token
      }
      //function to get the expiration time
      private getExpirationTime(){
        return moment.unix(this.decodedToken.exp);
      }

      public register(userData : any ) : Observable<any>{
        //returning the json file after validation from the server 
        return this.http.post('api/v1/users/register', userData)

      }

      public loginNotification(error : any){
        if(error){
          if((error.errors).length == 0){
            this.errorResponseLogin = "We are experiencing some Technical Problem, Please try again later!!";
          }else if(error.errors[0].detail){
            this.errorResponseLogin = error.errors[0].detail;
          }
        }else if(error.detail){

          this.errorResponseLogin = error.detail;
        }
        else{

          this.errorResponseLogin = "We are experiencing some Technical Problem";
        }
        
           
      }

      public registerNotification(error : any){
        if(error){
          if((error.error).length == 0){
            this.errorResponseLogin = "We are experiencing some Technical Problem, Please try again later!!";
          }else if(error.error[0].detail){
            this.errorResponseLogin = error.errors[0].detail;
          }
        }else if(error.detail){

          this.errorResponseLogin = error.detail;
        }
        else{

          this.errorResponseLogin = "We are experiencing some Technical Problem";
        }
        
      }

      //function to check the jwt expiration
      public isAuthenticated(): boolean{
          //checking if the user has logged in
          //condition if the user is not logged in 
          if(this.decodedToken == undefined || this.decodedToken == null){
            return false
          }else{
            //comparing the current time and expiration time
            //.unix function is to convert the mill sec unit 
            return moment().isBefore(this.getExpirationTime());
          }
      }
      //function to get the token
      public getAuthToken(): string{
        return localStorage.getItem('loginToken');
      }


      public login( loginData : any ): Observable<any>{
        //.mpa functionis anintermediate function between .post and subscribe to save the tokewn to the  browser
        return this.http.post('api/v1/users/auth', loginData).pipe(map(
          (token) =>{
            return this.saveToken(token);
          }
        ))
      }
      //function to claer the local storage on expiration 
      public logout(){
        localStorage.removeItem('loginToken_meta');
        localStorage.removeItem('loginToken');

        // this.decodedToken.username =  "";
        // this.decodedToken.exp = 0;
        this.decodedToken = null;
      }
      

      
      

    
}