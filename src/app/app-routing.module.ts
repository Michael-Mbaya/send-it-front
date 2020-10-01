import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: 'sign-up', component:SignupComponent},
  {path:'sign-in', component:SigninComponent},
  {path:'about', component:AboutUsComponent},
  {path: '**', component:NotFoundComponent},
  // redirect
  {path: '',redirectTo:"/sign-in",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
