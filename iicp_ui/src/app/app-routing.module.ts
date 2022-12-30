import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { AppLayoutComponent } from './User_View/Layout/app-layout/app-layout.component';
import { LoginFormComponent } from './User_View/Layout/login-form/login-form.component';
import { SignupFormComponent } from './User_View/Layout/signup-form/signup-form.component';
import { UserDashboardComponent } from './User_View/Layout/user-dashboard/user-dashboard.component';
import { FormComponent } from './User_View/Layout/form/form.component';
import { RenewCertificateComponent } from './User_View/Layout/renew-certificate/renew-certificate.component';
import { UserProfileComponent } from './User_View/Layout/user-profile/user-profile.component';
import { SearchRegisterAcountsComponent } from './User_View/Layout/search-register-acounts/search-register-acounts.component';
import { MyCompanyProfileComponent } from './User_View/Layout/my-company-profile/my-company-profile.component';
import { MyCertificateComponent } from './User_View/Layout/my-certificate/my-certificate.component';
import { LandingPageComponent } from './User_View/Layout/landing-page/landing-page.component';
import { ForgetPasswordComponent } from './User_View/Layout/forget-password/forget-password.component';
import { TestRenewalComponent } from './User_View/Layout/test-renewal/test-renewal.component';
import { TestOurCertificateComponent } from './User_View/Layout/test-our-certificate/test-our-certificate.component';


import { AuthGuard } from './Helpers/auth.guard';
import { CreatePasswordComponent } from './User_View/Layout/create-password/create-password.component';
import { ApplicationFormComponent } from './User_View/Layout/application-form/application-form.component';
import { EditApplicationFormComponent } from './User_View/Layout/edit-application-form/edit-application-form.component';
import { LevelOneComponent } from './User_View/Layout/level-one/level-one.component';
import { LevelTwoComponent } from './User_View/Layout/level-two/level-two.component';
import { LevelThreeComponent } from './User_View/Layout/level-three/level-three.component';
import { AdminDashboardComponent } from './Admin_View/Layout/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Admin_View/Layout/admin-login/admin-login.component';
import { ActiveMdaListComponent } from './Admin_View/Layout/active-mda-list/active-mda-list.component';
import { SuperRegisterUserComponent } from './Admin_View/Layout/super-register-user/super-register-user.component';
import { CertificateMdaListComponent } from './Admin_View/Layout/certificate-mda-list/certificate-mda-list.component';
import { SingleMdaListComponent } from './Admin_View/Layout/single-mda-list/single-mda-list.component';
import { AddCredentialUserComponent } from './Admin_View/Layout/add-credential-user/add-credential-user.component';


const routes: Routes = [
  // {
  //   path: '',
  //   // component:AdminLayoutComponent
  //   component: AppLayoutComponent,
  // },
  {
    path: 'employees',canActivate:[AuthGuard],
    data: {roles: 2},
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
    path: 'user-form',canActivate:[AuthGuard],
    data: {roles: 2},
    component: FormComponent
  },
  {
    path: 'submit-applications',canActivate:[AuthGuard],
    data: {roles: 2},
    component: RenewCertificateComponent
  },
  {
    path: 'user-profile',canActivate:[AuthGuard],
    data: {roles: 2},
    component: UserProfileComponent
  },
  {
    path: 'search-register-accounts',canActivate:[AuthGuard],
    data: {roles: 2},
    component: SearchRegisterAcountsComponent
  },
  {
     path: 'dashboard',//canActivate:[AuthGuard],
    // data: {roles: "SuperMDA"},
    component: UserDashboardComponent
  },
  {
    path: 'company-profile',canActivate:[AuthGuard],
    data: {roles: "EntryUser"},
    component: MyCompanyProfileComponent
  },
  {
    path: 'my-certificate',canActivate:[AuthGuard],
    data: {roles: "SuperMDA"},
    component: MyCertificateComponent
  },
  {
    path: 'renewal-certificate',canActivate:[AuthGuard],
    data: {roles: "SuperMDA"},
    component: TestRenewalComponent
  },
  
  {
    path: 'our-certificate',canActivate:[AuthGuard],
    data: {roles: "SuperMDA"},
    component: TestOurCertificateComponent},
  
  {  path: 'create-password',canActivate:[AuthGuard],
  data: {roles: "SuperMDA"},
    component: CreatePasswordComponent
  },

  {  path: 'application-form',canActivate:[AuthGuard],
  data: {roles: "EntryUser"},
    component: ApplicationFormComponent
  },
  {  path: 'edit-application-form',canActivate:[AuthGuard],
  data: {roles: "SuperMDA"},
  component: EditApplicationFormComponent
},
{  path: 'level-one',canActivate:[AuthGuard],
data: {roles: "SuperMDA"},
component: LevelOneComponent
},
{  path: 'level-two',canActivate:[AuthGuard],
data: {roles: "SuperMDA"},
component: LevelTwoComponent
},
{  path: 'level-three',
canActivate:[AuthGuard],
    data: {roles: "SuperMDA"},
component: LevelThreeComponent
},
{  path: 'admin-dashboard',
canActivate:[AuthGuard],
data: {roles: 1},
component: AdminDashboardComponent
},
{  path: 'admin-login',
component: AdminLoginComponent
},
{  path: 'register-superadmin-user',
canActivate:[AuthGuard],
data: {roles: 1},
component: SuperRegisterUserComponent
},
{
  path:"active-mda",
  canActivate:[AuthGuard],
  data: {roles: 1},
  component: ActiveMdaListComponent
},
{
  path:"mda-certificate",
  canActivate:[AuthGuard],
  data: {roles: 1},
  component:CertificateMdaListComponent
},
{
  path:"single-mda",
  canActivate:[AuthGuard],
  data: {roles: 1},
  component:SingleMdaListComponent
},
{
  path:"create-credential-user",
  component:AddCredentialUserComponent
},
  // {
  //   path: '',
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
