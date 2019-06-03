//here we are importing component module from @angular/core directory which is mandatory for all components 
import { Component} from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
    selector:'bwm-header',
    templateUrl : "./header.component.html",
    styleUrls : ["./header.component.scss"]
})
export class HeaderComponent{
    //inject the servovce intop the constructor 
    constructor( 
      private authService : AuthService,
      private router: Router){}
    

    ngOnInit() {
    
      }

      loggedIn(){
        return this.authService.decodedToken.username;
        
      }

      logout(){
        this.authService.logout();
        //navigating the user to the login page 
        this.router.navigate(['/auth/login']);
      }

}