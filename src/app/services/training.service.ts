import { Injectable } from '@angular/core';
import { Training } from '../entities/Training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private training: Training[] = [
    new Training(1, 'Treinamento A', 'Descrição do Treinamento A', new Date('2023-10-10'), new Date('2023-11-10')),
    new Training(2, 'Treinamento B', 'Descrição do Treinamento B', new Date('2023-09-15'), new Date('2023-10-15')),
    new Training(3, 'Treinamento C', 'Descrição do Treinamento C', new Date('2023-11-05'), new Date('2023-12-05')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
    new Training(4, 'Treinamento D', 'Descrição do Treinamento D', new Date('2023-08-20'), new Date('2023-09-20')),
  ];

  constructor() { }

  getTraining(): Training[] {
    return this.training;
  }

  createTraining(training: Training): void {
    this.training.push(training);
  }

  updateTraining(training: Training): void {

  }
}
