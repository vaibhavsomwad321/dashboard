import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTableComponent } from './shared/components/user-table/user-table.component';
import { CreateUserComponent } from './shared/components/create-user/create-user.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ChartComponent } from './shared/components/chart/chart.component';

const routes: Routes = [
  {
path :'', redirectTo:'dashboard', pathMatch:'full'
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'user-table', component:UserTableComponent
  }, 
  {
    path : "create-user",  component : CreateUserComponent
  },
  {
    path:'chart', component:ChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
