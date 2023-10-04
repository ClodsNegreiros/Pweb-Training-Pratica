import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTrainingTableComponent } from './training/data-training-table/data-training-table.component';
import { AddTrainingComponent } from './training/add-training/add-training.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list-training', component: DataTrainingTableComponent},
  { path: 'add-training', component: AddTrainingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
