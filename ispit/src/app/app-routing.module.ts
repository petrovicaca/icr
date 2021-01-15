import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CandyComponent } from './candy/candy.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    { path : '', component: WelcomeComponent},
    { path : 'login', component: LoginComponent },
    { path : 'signup', component: SignupComponent },
    { path : 'candy', component: CandyComponent },
    { path : 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
