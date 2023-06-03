import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { UserTableComponent } from './shared/components/user-table/user-table.component';
import { CreateUserComponent } from './shared/components/create-user/create-user.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ChartComponent } from './shared/components/chart/chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToggleDirective } from './shared/direactive/toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserTableComponent,
    CreateUserComponent,
    DashboardComponent,
    ChartComponent,
    ToggleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
