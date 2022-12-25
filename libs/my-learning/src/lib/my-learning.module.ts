import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLearningListComponent } from './pages/my-learning-list/my-learning-list.component';
import { MyLearningViewComponent } from './pages/my-learning-view/my-learning-view.component';
import { MyEvaluationViewComponent } from './pages/my-evaluation-view/my-evaluation-view.component';
import { LearningItemComponent } from './components/card-learning/card-learning.component';
import { BooksResolver } from 'libs/book-base/src';
import { MyLearningService } from './services/my-learning.service';
import { MyLearningResolver } from './services/my-learning.resolver';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { myLearningsReducer } from './state/my-learnings.reducer';
import { MyLearningsEffects } from './state/my-learnings.effects';
import { UtilsModule } from 'libs/utils/src';
import { LearningDetailComponent } from './components/learning-detail/learning-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MyLearningListComponent,
    resolve: {
      books: BooksResolver,
      myLearnings: MyLearningResolver,
    },
  },
  {
    path: 'id/:id',
    component: MyLearningViewComponent,
    resolve: {
      books: BooksResolver,
      orders: MyLearningResolver,
    },
  },
  // {
  //   path: 'myevaluation/:id',
  //   component: MyEvaluationViewComponent,
  // },
];
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('myLearnings', myLearningsReducer),
    EffectsModule.forFeature([MyLearningsEffects]),

    RouterModule.forChild(routes),
    UtilsModule,
  ],
  declarations: [
    LearningDetailComponent,

    LearningItemComponent,
    MyLearningListComponent,
    MyLearningViewComponent,
    MyEvaluationViewComponent,
  ],
  providers: [MyLearningService, MyLearningResolver],
})
export class MyLearningModule {}
