import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { AppLayoutComponent } from './User_View/Layout/app-layout/app-layout.component';
import { LoginFormComponent } from './User_View/Layout/login-form/login-form.component';
import { SignupFormComponent } from './User_View/Layout/signup-form/signup-form.component';
import { AdminLayoutComponent } from './Admin_View/Layout/admin-layout/admin-layout.component';
import { UserDashboardComponent } from './User_View/Layout/user-dashboard/user-dashboard.component';
import { FormComponent } from './User_View/Layout/form/form.component';
import { RenewCertificateComponent } from './User_View/Layout/renew-certificate/renew-certificate.component';
import { UserProfileComponent } from './User_View/Layout/user-profile/user-profile.component';
import { SearchRegisterAcountsComponent } from './User_View/Layout/search-register-acounts/search-register-acounts.component';
import { MyCompanyProfileComponent } from './User_View/Layout/my-company-profile/my-company-profile.component';
import { MyCertificateComponent } from './User_View/Layout/my-certificate/my-certificate.component';
import { LandingPageComponent } from './User_View/Layout/landing-page/landing-page.component';
import { ForgetPasswordComponent } from './User_View/Layout/forget-password/forget-password.component';



import { AuthGuard } from './Helpers/auth.guard';
import { CreatePasswordComponent } from './User_View/Layout/create-password/create-password.component';



const routes: Routes = [
  // {
  //   path: '',
  //   // component:AdminLayoutComponent
  //   component: AppLayoutComponent,
  // },
  {
    path: 'employees',canActivate:[AuthGuard],
    component: EmployeesListComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'register',
    component: SignupFormComponent
  },

  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  
  {
    path: 'admin',canActivate:[AuthGuard],
    component: AdminLayoutComponent
  },
  {
    path: 'user-form',canActivate:[AuthGuard],
    component: FormComponent
  },
  {
    path: 'renew-certificate',canActivate:[AuthGuard],
    component: RenewCertificateComponent
  },
  {
    path: 'user-profile',canActivate:[AuthGuard],
    component: UserProfileComponent
  },
  {
    path: 'search-register-accounts',canActivate:[AuthGuard],
    component: SearchRegisterAcountsComponent
  },
  {
    path: 'dashboard',canActivate:[AuthGuard],
    component: UserDashboardComponent
  },
  {
    path: 'company-profile',canActivate:[AuthGuard],
    component: MyCompanyProfileComponent
  },
  {
    path: 'my-certificate',canActivate:[AuthGuard],
    component: MyCertificateComponent
  },
  {
    path: 'create-password',
    component: CreatePasswordComponent
  },
  // {
  //   path: '',
  //   component: UserDashboardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
