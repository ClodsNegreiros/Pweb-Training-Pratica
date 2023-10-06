import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTrainingTableComponent } from './data-training-table/data-training-table.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { TrainingService } from 'src/app/core/services/training/training.service';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app.routing';

@NgModule({
  declarations: [
    DataTrainingTableComponent,
    AddTrainingComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [
    // TrainingComponent
  ],
  providers: [TrainingService]
})
export class TrainingModule {}
