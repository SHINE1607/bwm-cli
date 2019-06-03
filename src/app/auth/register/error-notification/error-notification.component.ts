import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service'; 


@Component({
  selector: 'bwm-error-notification',
  templateUrl: './error-notification.component.html',
  styles: [`
  .example-pizza-party {
    color: red;
  }
`],
})
export class ErrorNotificationComponent implements OnInit {

  
  errorMessage : any;
  constructor(private auth : AuthService) { }

  ngOnInit() {
    if(this.auth.errorResponseRegister){
      this.errorMessage = this.auth.errorResponseRegister;   
      console.log(this.errorMessage);
    }else if(this.auth.errorResponseLogin){
      this.errorMessage = this.auth.errorResponseLogin;    
      
     }
    

}
}
