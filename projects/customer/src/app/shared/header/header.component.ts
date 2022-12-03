import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthBaseService, AuthSelectors, LocalStorageService } from 'libs/auth-base/src';
// import { AuthBaseService, AuthState , authSelector } from 'libs/auth-base/src';
import { select, Store } from '@ngrx/store';
import { map, Observable, of, Subject, take, takeUntil } from 'rxjs';
import { AppState } from '../../reducers';

@Component({
  selector: 'robinbook-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;
  
  // isAuth$ = this.store.select(authSelector.selectIsAuth)

  constructor(
    private localStorageService : LocalStorageService,
    private store: Store<AppState>) {}

  ngOnInit(): void {

    this.isLoggedIn$ = this.store.pipe(
      select(AuthSelectors.isLoggedIn)
    )
    this.isLoggedOut$ = this.store.pipe(
      select(AuthSelectors.isLoggedOut)
    )
  }



}
