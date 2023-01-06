import { ModuleWithProviders,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { fakeBackendProvider } from './Helpers/fake-backend';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
// import { SiteHeaderComponent } from './User_View/Layout/site-header/site-header.component';
import { SideBarComponent } from './User_View/Layout/side-bar/side-bar.component';
// import { SiteFooterComponent } from './User_View/Layout/site-footer/site-footer.component';
// import { AppLayoutComponent } from './User_View/Layout/app-layout/app-layout.component';
import { FormComponent } from './User_View/Layout/form/form.component';
import { LoginFormComponent } from './User_View/Layout/login-form/login-form.component';
import { SignupFormComponent } from './User_View/Layout/signup-form/signup-form.component';
import { UserDashboardComponent } from './User_View/Layout/user-dashboard/user-dashboard.component';
import { RenewCertificateComponent } from './User_View/Layout/renew-certificate/renew-certificate.component';
import { UserProfileComponent } from './User_View/Layout/user-profile/user-profile.component';
import { SearchRegisterAcountsComponent } from './User_View/Layout/search-register-acounts/search-register-acounts.component';
import { AppLayoutModule } from './User_View/Layout/app-layout/app-layout.component.module';
 import {
   SharedModule,
   SiteHeaderComponent,
   SiteFooterComponent,
 } from './shared';

 import { JwtInterceptor } from './Helpers/jwt.interceptor';
 import {ErrorInterceptor } from './Helpers/error.interceptor';
import { MyCompanyProfileComponent } from './User_View/Layout/my-company-profile/my-company-profile.component';
import { MyCertificateComponent } from './User_View/Layout/my-certificate/my-certificate.component';
import { LandingPageComponent } from './User_View/Layout/landing-page/landing-page.component';
import { ForgetPasswordComponent } from './User_View/Layout/forget-password/forget-password.component';
import { TestRenewalComponent } from './User_View/Layout/test-renewal/test-renewal.component';
import { TestOurCertificateComponent } from './User_View/Layout/test-our-certificate/test-our-certificate.component';
import { CreatePasswordComponent } from './User_View/Layout/create-password/create-password.component';
import { ApplicationFormComponent } from './User_View/Layout/application-form/application-form.component';
import { DxTabsModule, 
  DxSelectBoxModule,
    DxDataGridComponent,
  DxDataGridModule,
  DxCheckBoxModule,
  DxPieChartModule, 
  DxChartModule} from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditApplicationFormComponent } from './User_View/Layout/edit-application-form/edit-application-form.component';
import { LevelOneComponent } from './User_View/Layout/level-one/level-one.component';
import { LevelTwoComponent } from './User_View/Layout/level-two/level-two.component';
import { LevelThreeComponent } from './User_View/Layout/level-three/level-three.component';
import { AdminDashboardComponent } from './Admin_View/Layout/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './Admin_View/Layout/admin-layout/admin-layout.component';
import { AdminSidebarComponent } from './Admin_View/Layout/admin-sidebar/admin-sidebar.component';
import { AdminLoginComponent } from './Admin_View/Layout/admin-login/admin-login.component';
import { ActiveMdaListComponent } from './Admin_View/Layout/active-mda-list/active-mda-list.component';
import { SuperRegisterUserComponent } from './Admin_View/Layout/super-register-user/super-register-user.component';
import { CertificateMdaListComponent } from './Admin_View/Layout/certificate-mda-list/certificate-mda-list.component';
import { SingleMdaListComponent } from './Admin_View/Layout/single-mda-list/single-mda-list.component';
import { AddCredentialUserComponent } from './Admin_View/Layout/add-credential-user/add-credential-user.component';
import { AdminCommitteeComponent } from './Admin_View/Layout/admin-committee/admin-committee.component';
import { AdminGenerateCertificateComponent } from './Admin_View/Layout/admin-generate-certificate/admin-generate-certificate.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    // AppLayoutComponent,
    SideBarComponent,
    FormComponent,
    LoginFormComponent,
    SignupFormComponent,
    UserDashboardComponent,
    RenewCertificateComponent,
    UserProfileComponent,
    SearchRegisterAcountsComponent,
    MyCompanyProfileComponent,
    MyCertificateComponent,
    LandingPageComponent,
    ForgetPasswordComponent,
    TestRenewalComponent,
    TestOurCertificateComponent,
    CreatePasswordComponent,
    ApplicationFormComponent,
    EditApplicationFormComponent,
    LevelOneComponent,
    LevelTwoComponent,
    LevelThreeComponent,
    AdminDashboardComponent,
    AdminLayoutComponent,
    AdminSidebarComponent,
    AdminLoginComponent,
    ActiveMdaListComponent,
    SuperRegisterUserComponent,
    CertificateMdaListComponent,
    SingleMdaListComponent,
    AddCredentialUserComponent,
    AdminCommitteeComponent,
    AdminGenerateCertificateComponent,

   
   
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    AppLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DxTabsModule, 
    DxSelectBoxModule,
  DxDataGridModule,
  DxCheckBoxModule,
  Ng2SearchPipeModule,
  DxPieChartModule,
  DxChartModule,
  ],
  // providers: [],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);