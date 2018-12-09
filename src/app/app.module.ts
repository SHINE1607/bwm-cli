//app module is where we are importing and refencing all the components that are required to run the application
//here the aap.module ts is converted to js code which is complide by the browser compiler.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//here we are importing the component to the app module or the main module
import { HeaderComponent} from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    //here we are refencing the header component to use it in the app component 
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
