import { Component, Input, OnInit } from "@angular/core";
import { ILearning } from "libs/utils/src";

@Component({
  selector: 'customer-learning-detail',
  templateUrl: './learning-detail.component.html',
})


export class LearningDetailComponent implements OnInit {
  @Input() learning!: ILearning;

  ngOnInit(): void {
  }
}
