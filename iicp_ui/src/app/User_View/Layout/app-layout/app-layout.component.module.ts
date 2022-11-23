import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout.component';
import { SharedModule } from '../../../shared'; 

export  const AppLayoutRouting: ModuleWithProviders<unknown> = RouterModule.forRoot([
  {
    path: '',
    component: AppLayoutComponent
  }
]);

@NgModule({
  imports: [
   
    SharedModule
  ],
  declarations: [
    AppLayoutComponent
  ],
  providers: []
})
export class AppLayoutModule {}