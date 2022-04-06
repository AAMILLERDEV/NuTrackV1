import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth/auth.module';
import { ProfileComponent } from './main/profile/profile.component';
import { InterceptorService } from './services/interceptor-service.service';
import { HomeComponent } from "./main/home/home.component";
import { WelcomeComponent } from "./main/welcome/welcome.component";
import { AddRecordComponent } from './main/add-record/add-record.component';
import { ViewAllRecordsComponent } from './main/view-all-records/view-all-records.component';
import { AboutComponent } from './main/about/about.component';
import { AdminComponent } from './auth/components/admin/admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ViewRecordComponent } from './main/view-record/view-record.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    WelcomeComponent,
    AddRecordComponent,
    ViewAllRecordsComponent,
    AboutComponent,
    AdminComponent,
    ViewRecordComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        AuthModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
