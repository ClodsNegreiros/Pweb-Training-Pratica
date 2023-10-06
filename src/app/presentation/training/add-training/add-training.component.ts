import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TrainingService } from 'src/app/core/services/training/training.service';
import { Training } from '../../../domain/entities/Training';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit{
  mode: 'add' | 'edit' = 'add';

  trainingForm!: FormGroup;

  constructor(
    private trainingService: TrainingService,
    private route: ActivatedRoute,
    private formGroup: FormBuilder
  ) {
    this.trainingForm = this.formGroup.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    })
  }

  ngOnInit():void {
    const trainingId = this.route.snapshot.paramMap.get('id');
    if (trainingId) {
      this.mode = 'edit';

      const training = this.trainingService.getTrainingById(parseInt(trainingId));

      if (training) {
        this.trainingForm.patchValue({
          name: training.name,
          description: training.description,
          startDate: training.startDate,
          endDate: training.endDate
        });
      }
    }
  }

  get name() {
    return this.trainingForm.get('name')!;
  }

  get description() {
    return this.trainingForm.get('description')!;
  }

  get startDate() {
    return this.trainingForm.get('startDate')!;
  }

  get endDate() {
    return this.trainingForm.get('endDate')!;
  }

  createTraining(): void {
    const { name, description, startDate, endDate } = this.trainingForm.value;

      const training = new Training({
        name,
        description,
        startDate,
        endDate
      });

    this.trainingService.createTraining(training);
  }

  updateTraining(): void {
    const { name, description, startDate, endDate } = this.trainingForm.value;
    const trainingId = this.route.snapshot.paramMap.get('id');

      if (!trainingId) {
        return
      }

      const training = new Training({
        id: parseInt(trainingId),
        name,
        description,
        startDate,
        endDate
      });

      this.trainingService.updateTraining(training);
  }

  onSubmit(): void {
    try {
      if (this.trainingForm.invalid) {
        return
      }

      if (this.mode == 'add') {
        this.createTraining();
      } else {
        this.updateTraining();
      }
    } catch (error) {
      console.log(error)
    }
  }
}
