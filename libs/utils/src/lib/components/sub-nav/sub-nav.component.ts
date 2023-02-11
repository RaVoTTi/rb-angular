import { Component, Input, OnInit } from '@angular/core';

import { Location } from '@angular/common';
@Component({
  selector: 'frontend-sub-nav',
  templateUrl: './sub-nav.component.html',
})
export class SubNavComponent implements OnInit {
  constructor(private location: Location) {}

  @Input() title!: string;
  ngOnInit(): void {}
  back() {
    this.location.back();
  }
}
