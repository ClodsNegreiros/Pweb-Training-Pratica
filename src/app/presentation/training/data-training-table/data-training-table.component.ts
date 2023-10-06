import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataTrainingTableDataSource } from './data-training-table-datasource';

import { Training } from 'src/app/domain/entities/Training';
import { TrainingService } from './../../../core/services/training/training.service';

@Component({
  selector: 'app-data-training-table',
  templateUrl: './data-training-table.component.html',
  styleUrls: ['./data-training-table.component.css']
})
export class DataTrainingTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Training>;
  dataSource = new DataTrainingTableDataSource(this.trainingService);

  constructor(private trainingService: TrainingService) {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  treino?: Training;
  displayedColumns = ['id', 'name', 'descrição', 'data início', 'data fim', 'ações'];

  ngOnInit(): void {
    this.trainingService.getTraining();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onDelete(id: number): void {
    this.trainingService.deleteTraining(id);
  }
}
