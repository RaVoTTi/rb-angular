import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { IBook, ILearning } from 'libs/utils/src';

@Component({
  selector: 'frontend-card-learning',
  templateUrl: './card-learning.component.html',
})
export class LearningItemComponent {
  
  RAW_URL = environment.RAW_URL
  
  @Input() learning!: ILearning;
  @Input() book!: IBook | undefined; // TODO



  constructor(
  ) {}


  }
