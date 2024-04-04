import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RemodelationComponent } from './pages/remodelation/remodelation.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ShellComponent } from './pages/shell/shell.component';
import { PlaneComponent } from './pages/plane/plane.component';
import { PlaneBookingFormComponent } from './shared/plane-booking-form/plane-booking-form.component';
import { DocsModule } from './pages/docs.module';
import { DocsRoutingModule } from './pages/docs-routing.module';
import { HomeRoutingModule } from './pages/docs/home-routing.module';
import { LoginRoutingModule } from './pages/docs/login-routing.module';
import { PlaneRoutingModule } from './pages/docs/plane-routing.module';
import { RemodelationRoutingModule } from './pages/remodelation/remodelation-routing.module';
import { ShellRoutingModule } from './pages/shell/shell-routing.module';
import { SharedRoutingModule } from './pages/shared/shared-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RemodelationComponent,
    DocsComponent,
    ShellComponent,
    PlaneComponent,
    PlaneBookingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocsModule,
    DocsRoutingModule,
    HomeRoutingModule,
    LoginRoutingModule,
    PlaneRoutingModule,
    RemodelationRoutingModule,
    ShellRoutingModule,
    SharedRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
