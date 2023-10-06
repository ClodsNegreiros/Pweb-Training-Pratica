import { EventEmitter, Injectable } from '@angular/core';
import { Training } from '../../../domain/entities/Training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private training: Training[] = [];

  constructor() {
    this.training
  }

  getTraining(): Training[] {
    return this.training;
  }

  createTraining(training: Training): void {
    const newTraining = {...training, id: this.generateId()};
    this.training.push(newTraining);
  }

  updateTraining(training: Training): void {
    if (training.id) {
      let trainingToChange = this.getTrainingById(training?.id);

      if (trainingToChange) {
        trainingToChange.id = training.id,
        trainingToChange.name = training.name,
        trainingToChange.description = training.description,
        trainingToChange.startDate = training.startDate,
        trainingToChange.endDate = training.endDate
      }
    }
  }

  deleteTraining(id: number): void {
    const trainingToDelete = this.training.findIndex((training) => training.id === id);
    if (trainingToDelete !== -1) {
      this.training.splice(trainingToDelete, 1);
    }
  }

  getTrainingById(id: number): Training | null {
    const trainingToReturn = this.training.find(
      training => training.id == id
    )
    return trainingToReturn || null
  }

  generateId(): number {
    const lengthOfList = this.training.length;
    return lengthOfList + 1;
  }
}
