import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    SearchBoxComponent, 
    ShortNumberPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SearchBoxComponent,
    ShortNumberPipe
  ]
})
export class SharedModule { }
