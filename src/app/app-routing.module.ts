import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { HomeComponent } from './home/home.component'
import { LandingPageComponent } from './landing-page/landing-page.component';
import {UserComponent} from './user/user.component'

const routes: Routes = [
  {path: 'landing-page', component:LandingPageComponent},
  {path: 'sign-up', component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'users',component:UserComponent},
  {path:'sign-in', component:SigninComponent},
  {path:'about', component:AboutUsComponent},
  {path:'deliveries',component:DeliveryComponent},
    // redirect
    {path: '',redirectTo:"/landing-page",pathMatch:"full"},
  {path: '**', component:NotFoundComponent},
  // // redirect
  // {path: '',redirectTo:"/sign-in",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }