import { Component } from '@angular/core';

import { Training } from '../../domain/entities/Training';
// import { TrainingService } from '../services/training.service';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {

  training: Training[] = [];

  displayedColumns: string[] = [
    'id', 'nome', 'descrição', 'data de início', 'data de fim'
  ];

}
