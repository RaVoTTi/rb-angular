import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { concatMap, map, take } from 'rxjs';
import { MyLearningService } from '../services/my-learning.service';
import {
  allMyLearningsLoaded,
  loadAllMyLearnings,
} from './my-learnings.actions';

@Injectable()
export class MyLearningsEffects {
  loadMyLearnings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllMyLearnings),
      concatMap((action) => this.myLearningService.getMyLearnings()),
      map(({ result }) => {
        console.log(result)
        const myLearnings = result ?? [];
        return allMyLearningsLoaded({ myLearnings });
      })
    )
  );

  constructor(
    private store: Store,

    private actions$: Actions,
    private myLearningService: MyLearningService
  ) {}
}
