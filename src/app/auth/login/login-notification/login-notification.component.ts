import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service'; 
@Component({
  selector: 'bwm-login-notification',
  templateUrl: './login-notification.component.html',
  styles: [`
  .example-pizza-party {
    color: rgb(40, 42, 53);
  }
  
`],})
export class LoginNotificationComponent implements OnInit {


  message : string;
  constructor(private auth : AuthService) { }

  ngOnInit() {
    console.log("kuntham");
    this.message =  this.auth.notifyMessage;
  }

}
