import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { StateToggleComponent } from './components/state-toggle/state-toggle.component';


const declarations = [
  SearchBoxComponent, 
  ShortNumberPipe,
  PieChartComponent,
  PaginatorComponent,
  StateToggleComponent
];


@NgModule({
  declarations: [...declarations],
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
    ...declarations
  ]
})
export class SharedModule { }
