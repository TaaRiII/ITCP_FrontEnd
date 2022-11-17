import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { SiteHeaderComponent } from './User_View/Layout/site-header/site-header.component';
import { SideBarComponent } from './User_View/Layout/side-bar/side-bar.component';
import { SiteFooterComponent } from './User_View/Layout/site-footer/site-footer.component';
import { AppLayoutComponent } from './User_View/Layout/app-layout/app-layout.component';
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


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    AppLayoutComponent,
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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
