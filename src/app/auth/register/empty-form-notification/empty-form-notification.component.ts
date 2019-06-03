import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { ErrorStateMatcher } from '@angular/material';


@Component({
  selector: 'bwm-empty-form-notification',
  templateUrl: './empty-form-notification.component.html',
  styles: [`
    .example-pizza-party {
      color: red;
    }
    
  `],
})
export class EmptyFormNotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 
  }

}
