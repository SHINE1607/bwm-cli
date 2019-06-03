import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { MatFormFieldModule } from '@angular/material/form-field';
//to store the adta in the form data 
// import { MatInputModule}  from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
//fro using the fromControl
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { EmptyFormNotificationComponent } from './register/empty-form-notification/empty-form-notification.component';

import { HttpClientModule } from '@angular/common/http';
//importing the auth service 
import { AuthService } from './shared/auth.service';
import { ErrorNotificationComponent } from './register/error-notification/error-notification.component';
import { LoginNotificationComponent } from './login/login-notification/login-notification.component';
import { TokenInterceptor } from './shared/token.interceptor'; 
import { NgxSpinnerModule } from 'ngx-spinner';

//importing the auth guard 



//creating the routes and child routes 
const routes: Routes = [
//  { path : "login", component : LoginComponent },
//  { path : "register", component : RegisterComponent }
  // { path : "", redirectTo : "/rentals",  pathMatch : "full" }
  {path : 'auth', component: AuthComponent,
  children : [
    { path : "login", 
      component: LoginComponent,
      canActivate : [AuthGuard] },
    { path : "register", 
      component : RegisterComponent,
      canActivate : [AuthGuard]
   }
    
  ] }
  
]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    EmptyFormNotificationComponent,
    ErrorNotificationComponent,
    LoginNotificationComponent,
  ],
  imports: [
    //RouterModule.forRoot fucnction will be automatically called when there is a change in the url with routes array 
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthService, 
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      //we are registering our token inteptors to the HTTP_INTEPTORES
      useClass : TokenInterceptor,
      multi : true
    }
  ],
  entryComponents : [
    EmptyFormNotificationComponent,
    ErrorNotificationComponent,
    LoginNotificationComponent,
  ]
})
export class AuthModule { }