import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'robinbook-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  home!: boolean;
  loading = false;

  constructor() {

  }
}
