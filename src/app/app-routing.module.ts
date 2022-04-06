import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ProfileComponent } from './main/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { WelcomeComponent} from "./main/welcome/welcome.component";
import { HomeComponent } from "./main/home/home.component";
import {AddRecordComponent} from "./main/add-record/add-record.component";
import {ViewAllRecordsComponent} from "./main/view-all-records/view-all-records.component";
import {AboutComponent} from "./main/about/about.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'home', canActivate: [AuthGuardService], component: HomeComponent},
  {path: 'profile', canActivate: [AuthGuardService], component: ProfileComponent},
  {path: 'add-record', canActivate: [AuthGuardService], component: AddRecordComponent},
  {path: 'view-all-records', canActivate: [AuthGuardService], component: ViewAllRecordsComponent},
  {path: 'about', canActivate: [AuthGuardService], component: AboutComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
