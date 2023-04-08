// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// NGRX
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';

// ME
import { WishlistService } from './services/wishlist.service';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
// import { MessageService } from 'primeng/api';

import { BooksListComponent } from './pages/books-list/books-list.component';
import { BookViewComponent } from './pages/book-view/book-view.component';
import { BooksResolver } from './services/books.resolver';
import { CardBookComponent } from '../../../book-base/src/lib/components/card-book/card-book.component';
import { WishlistIconComponent } from './components/wishlist-icon/wishlist-icon.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './state/books/books.effects';
import { booksReducer } from './state/books/books.reducer';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from 'libs/utils/src';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  {
    path: '',
    component: SearchHeaderComponent,
    children: [
      {
        path: '',
        component: BooksListComponent,
        resolve: {
          books: BooksResolver,
        },
      },
      {
        path: 'id/:id',
        component: BookViewComponent,
        resolve: {
          books: BooksResolver,
        },
      },

      {
        path: 'wishlist',
        component: WishlistComponent,
        resolve: {
          books: BooksResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('books', booksReducer),
    UtilsModule,
    EffectsModule.forFeature([BooksEffects]),
    ReactiveFormsModule,
  ],
  declarations: [
    WishlistIconComponent,
    CardBookComponent,
    WishlistComponent,
    SearchHeaderComponent,
    BooksListComponent,
    BookViewComponent,
    BookDetailComponent,
    TermsComponent,
  ],
  exports: [
    SearchHeaderComponent,
    TermsComponent,
    WishlistIconComponent,
    CardBookComponent,
    BooksListComponent,
    BookViewComponent,
  ],
  providers: [
    // MessageService,
    BooksResolver,
    // WishResolver
  ],
})
export class BookBaseModule {
  constructor(wishlistService: WishlistService) {
    wishlistService.initWishlistLocalStorage();
  }
}
