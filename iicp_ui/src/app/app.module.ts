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
import { AdminLayoutComponent } from './Admin_View/Layout/admin-layout/admin-layout.component';
import { AdminSidebarComponent } from './Admin_View/Layout/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './Admin_View/Layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './Admin_View/Layout/admin-footer/admin-footer.component';
import { AdminPageContentComponent } from './Admin_View/Layout/admin-page-content/admin-page-content.component';
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
    AdminLayoutComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminPageContentComponent,
    UserDashboardComponent,
    RenewCertificateComponent,
    UserProfileComponent,
    SearchRegisterAcountsComponent,
    MyCompanyProfileComponent,
    MyCertificateComponent,
    LandingPageComponent,
    ForgetPasswordComponent,
    
   
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    AppLayoutModule,
    FormsModule,
    ReactiveFormsModule,
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
