import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataTrainingTableDataSource } from './data-training-table-datasource';

import { Training } from 'src/app/entities/Training';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-data-training-table',
  templateUrl: './data-training-table.component.html',
  styleUrls: ['./data-training-table.component.css']
})
export class DataTrainingTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Training>;
  dataSource = new DataTrainingTableDataSource(new TrainingService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'descrição', 'data início', 'data fim'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
