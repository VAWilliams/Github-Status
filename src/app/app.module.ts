import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';

import { AppComponent } from './app.component';
import { IssuesComponent } from './core/views/issues/issues.component';
import { NotFoundComponent } from './core/views/not-found/not-found.component';
import { RepositoriesComponent } from './core/views/repositories/repositories.component';
import { RepositoryComponent } from './core/views/repository/repository.component';
import { DashboardComponent } from './core/views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    DashboardComponent,
    NotFoundComponent,
    RepositoriesComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GoogleChartsModule.forRoot(),
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
