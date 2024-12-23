import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { GithubProjectComponent } from './github-project/github-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceDialogComponent } from './device-dialog/device-dialog.component';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceManagementComponent,
    CategoryManagementComponent,
    CustomSidenavComponent,
    GithubProjectComponent,
    DashboardComponent,
    DeviceDialogComponent,
    CategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
