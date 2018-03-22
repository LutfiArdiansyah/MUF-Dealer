import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService }  from './authguard.service';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = [
  {path:'login',component:LoginComponent},
  { path: '', component: LandingComponent, canActivate: [AuthguardService],
  children: [
    { path: '', component: HomeComponent }    
  ]
}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
