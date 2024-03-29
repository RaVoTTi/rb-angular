import { Component, OnInit } from '@angular/core';
import { selectAllBooks, selectBooksById } from 'libs/book-state/src';
import { select, Store } from '@ngrx/store';
import { IBook, IItem, ILearning, IOrder } from 'libs/utils/src';
import { Observable, take } from 'rxjs';
import { MyLearningService } from '../../services/my-learning.service';
import {
  selectAllMyLearnings,
  selectCountMyLearnings,
} from '../../state/my-learnings.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'libs/utils/src';

@Component({
  selector: 'frontend-my-learning-list',
  templateUrl: './my-learning-list.component.html',
})
export class MyLearningListComponent implements OnInit {
  allMyLearnings$!: Observable<ILearning[]>;
  countMyLearnings$!: Observable<number>;
  // allMyLearnings!: ILearning[];

  constructor(
    private router: Router,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private store: Store,
    private myLearningService: MyLearningService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const state = params['state'];

      if (state) {
        if (state === 'success') {
          this.alertService.fire(
            {
              title: 'Your purchased was succesful!!',
              text: 'Enjoy your summarise..',
              icon: 'success',
            },
            {
              urlConfi: '/app/mylearning', // 🔴 TODOOO
              urlCancel: '/app/mylearning',
            }
          );
        } else if (state === 'fail') {
          this.alertService.fire(
            {
              title: 'The payment was unsuccesful!! ',
              text: 'Check your card or try again',
              icon: 'error',
            },
            {
              urlConfi: '/app/mylearning', // 🔴 TODOOO
              urlCancel: '/app/mylearning',
            }
          );
        }
      }
    });
    this.reload();
  }
  reload() {
    // this.myLearningService
    //   .getMyLearnings()
    //   .pipe(take(1))
    //   .subscribe((response) => {
    //     this.allMyLearnings = response.result ? response.result : [];
    //     console.log(this.allMyLearnings)
    //   });
    this.allMyLearnings$ = this.store.pipe(select(selectAllMyLearnings));
    this.countMyLearnings$ = this.store.pipe(select(selectCountMyLearnings));
  }

  book(id: string): IBook | undefined {
    let data: IBook | undefined;
    this.store
      .pipe(select(selectBooksById(id)), take(1))
      .subscribe((book) => (data = book));

    return data;
  }
}
