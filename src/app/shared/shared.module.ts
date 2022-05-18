import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [
    SearchBoxComponent, 
    ShortNumberPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GoogleChartsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    SearchBoxComponent,
    ShortNumberPipe
  ]
})
export class SharedModule { }
