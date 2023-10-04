import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { TrainingComponent } from './training.component';
import { DataTrainingTableComponent } from './data-training-table/data-training-table.component';
import { AddTrainingComponent } from './add-training/add-training.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    TrainingComponent,
    DataTrainingTableComponent,
    AddTrainingComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    TrainingComponent
  ]
})
export class TrainingModule {}
