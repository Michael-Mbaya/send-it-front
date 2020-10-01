import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { DeliveryComponent } from './delivery/delivery.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { DeliveryApiService } from './delivery-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NotFoundComponent,
    NavComponent,
    AboutUsComponent,
    DeliveryComponent,
    HomeComponent,
  ],
  imports: [
   BrowserModule,
   HttpClientModule,
   AppRoutingModule
  ],
  providers: [DeliveryApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }