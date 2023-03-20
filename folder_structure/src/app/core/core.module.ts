import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ProfileComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
