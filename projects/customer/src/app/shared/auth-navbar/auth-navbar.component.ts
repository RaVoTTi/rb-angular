import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthActions,
  AuthBaseService,
  LocalStorageService,
} from 'libs/auth-base/src';
import { Store } from '@ngrx/store';
import { IItem } from 'libs/utils/src';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'robinbook-auth-navbar',
  templateUrl: './auth-navbar.component.html',
})
export class AuthNavbarComponent {

  screenWidth: any;

  isDropdownOpened = false;

  constructor(
    private router: Router,
    private store: Store,
  ) {

    
  }


  logOut(){
    this.store.dispatch(AuthActions.logout());
  }

 

}
