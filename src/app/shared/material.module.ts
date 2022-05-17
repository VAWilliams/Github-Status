import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const Modules = [
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatChipsModule,
  MatGridListModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatCardModule,
  MatButtonToggleModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports: [...Modules]
})
export class MaterialModule { }
