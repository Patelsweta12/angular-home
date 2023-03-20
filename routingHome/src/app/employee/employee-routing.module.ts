import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee-list', pathMatch: 'full'},
  { path: 'employee-list', component:EmployeeListComponent},
  { path: 'employee-details/:id', component: EmployeeDetailsComponent,canActivate: [AuthService] },
  // { path: '**', redirectTo: '/companies/snowbank' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
