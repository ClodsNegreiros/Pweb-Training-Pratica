import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTrainingTableComponent } from './presentation/training/data-training-table/data-training-table.component';
import { AddTrainingComponent } from './presentation/training/add-training/add-training.component';
import { HomeComponent } from './presentation/home/home.component';
import { TrainingComponent } from './presentation/training/training.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'training', component: TrainingComponent},
  { path: 'list-training', component: DataTrainingTableComponent},
  { path: 'add-training', component: AddTrainingComponent},
  { path: 'edit-training/:id', component: AddTrainingComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
