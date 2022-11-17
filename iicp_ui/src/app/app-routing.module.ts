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




const routes: Routes = [
  {
    path: '',
    // component:AdminLayoutComponent
    component: AppLayoutComponent,
  },
  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: SignupFormComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent
  },
  {
    path: 'user-form',
    component: FormComponent
  },
  {
    path: 'renew-certificate',
    component: RenewCertificateComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'search-register-accounts',
    component: SearchRegisterAcountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
