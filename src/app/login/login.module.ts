import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisFormComponent } from './regis-form/regis-form.component';




const loginRoutes: Routes = [
  { path: 'login', component: LoginFormComponent, },
  { path: 'login/regis', component: RegisFormComponent },

]

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginModule { }
