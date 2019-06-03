import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators,FormGroup } from '@angular/forms';
import  {ErrorStateMatcher } from '@angular/material/core';
import {MatSnackBar} from '@angular/material';
import { EmptyFormNotificationComponent } from '../register/empty-form-notification/empty-form-notification.component';
import { ErrorNotificationComponent } from '../register//error-notification/error-notification.component';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';    
import { LoginNotificationComponent } from './login-notification/login-notification.component'  
import { NgxSpinnerService } from 'ngx-spinner';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  formData = new FormGroup({
    email : new FormControl(),
    password: new FormControl(),
  });
  errors : any[] = [];

  matcher = new MyErrorStateMatcher();
   
  constructor(
    private notificatiion: MatSnackBar,
    private auth : AuthService,
    private router: Router,
    private route : ActivatedRoute,
    private spinner : NgxSpinnerService
    ) { }

  ngOnInit() {

    this.route.params.subscribe((params) =>{
      if (params['register'] === "success"){
        this.auth.notifyMessage = "You are successfully registered, Now you can login!!";
        this.notificatiion.openFromComponent(LoginNotificationComponent, {duration: 5 * 1000});


      }
    })
  }

  emailValidation(){
    this.formData.value.email = this.emailFormControl.value;
  }
  //function to show thw notification if there is any empty forms  
  emptyNotification(){
    this.notificatiion.openFromComponent(EmptyFormNotificationComponent, {duration: 5 * 1000});
  }
  //function to check for any empty forms 
  checkEmptyForms(){
    if( this.formData.value.email == "" ||
        this.formData.value.password == null ) {
          this.emptyNotification();
          return false
        }else{
          return true
        }
  }

  login (){
    this.spinner.show();
    this.emailValidation();
    this.checkEmptyForms();
    if(this.checkEmptyForms() == true){
      //subscribingg the response from the servivce emitter by the server 
      this.auth.login(this.formData.value).subscribe(
        //token is passed by the server onsuccessful login
        
        (token) =>{
          this.spinner.hide();
          this.auth.notifyMessage = "You are successfully logged in";
          this.notificatiion.openFromComponent(LoginNotificationComponent, {duration: 5 * 1000});
          this.router.navigate(['/rentals']);
        },
        //handling with the rror response
        (errorResponse) =>{
          this.spinner.hide();
          this.errors = errorResponse.error;
          //function to show the error response in the snack bar
          this.auth.loginNotification(this.errors);
          this.notificatiion.openFromComponent(ErrorNotificationComponent, {duration: 5 * 1000});
        }
        

      )
  }
  }

  tryOnceMore(){
    this.spinner.hide();
  }
}
