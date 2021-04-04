import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorInterfaceComponent } from './pages/doctor-interface/doctor-interface.component';
import { MainWindowComponent } from './pages/main-window/main-window.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainmenu', pathMatch: 'full'},
  { path: 'mainmenu', component: MainWindowComponent},
  { path: 'lk', component: DoctorInterfaceComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
