import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators,FormGroup } from '@angular/forms';
import  {ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material';
import { EmptyFormNotificationComponent } from './empty-form-notification/empty-form-notification.component';
import { ErrorNotificationComponent } from './error-notification/error-notification.component';
import { AuthService } from '../shared/auth.service';
//importing the router to redirect to login page on successfull register
import { Router } from '@angular/router';    
import { NgxSpinnerService } from 'ngx-spinner';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'bwm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);



  formData = new FormGroup({
    username: new FormControl(),
    email : new FormControl(),
    password: new FormControl(),
    passwordConfirmation: new FormControl(),
  });
  
  errors : any[] = [];

  matcher = new MyErrorStateMatcher();
   
  constructor(
    private notificatiion: MatSnackBar,
    private auth : AuthService,
    private router: Router,
    private spinner : NgxSpinnerService 
    ) { }

  ngOnInit() {
  }

  //finctio to store the data after validation to fromDATA
  emailValidation(){
    this.formData.value.email = this.emailFormControl.value;
  }
  //function to show thw notification if there is any empty forms  
  emptyNotification(){
    this.spinner.hide();
    this.notificatiion.openFromComponent(EmptyFormNotificationComponent, {duration: 5 * 1000});
  }
  //function to check for any empty forms 
  checkEmptyForms(){
    if( this.formData.value.email == "" || 
        this.formData.value.username == null || 
        this.formData.value.password == null ||
        this.formData.value.passwordConfirmation == null) {
          this.emptyNotification();
          return false
        }else{
          return true
        }
  }
  

  validate (){
    this.spinner.show();
    this.emailValidation();
    this.checkEmptyForms();
    if(this.checkEmptyForms() == true){
      //subscribingg the response from the servivce emitter by the server 
      this.auth.register(this.formData.value).subscribe(
        //habbdling the successfull response
        () =>{
          this.spinner.hide();
          //routing to the logon page on success
          //here fisrt parameter is the rouite of the page and second is the info passed 
          
          this.router.navigate(['/auth/login', {register : "success"}])
          console.log("response is a successs!!")
        },
        //handling with the rror response
        (errorResponse) =>{
          this.spinner.hide();
          this.errors = errorResponse.error;
          //function to show the error response in the snack bar
          this.auth.registerNotification(this.errors);
          this.notificatiion.openFromComponent(ErrorNotificationComponent, {duration: 5 * 1000});
        }
        

      )
  }
    }
    tryOnceMore(){
      this.spinner.hide();
    }
    

}
