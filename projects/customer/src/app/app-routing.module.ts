import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import {
  BooksListComponent,
  BooksResolver,
  BookViewComponent,
  WishlistComponent,
} from 'libs/book-base/src';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './shared/main/main.component';
import { IsLoggedIn, IsLoggedOut } from 'libs/auth-base/src';

const routes: Routes = [
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [IsLoggedOut],

        // component: TestComponent,
      },
      {
        path: 'books',

        component: BooksListComponent,

        resolve: {
          books: BooksResolver,
        },
      },
      {
        path: 'books/id/:id',
        component: BookViewComponent,
        resolve: {
          books: BooksResolver,
        },
      },

      {
        path: 'books/wishlist',
        component: WishlistComponent,
        resolve: {
          books: BooksResolver,
        },
      },
      
      {
        path: 'mylearning',
        loadChildren: () =>
          import('libs/my-learning/src').then((m) => m.MyLearningModule),
        canActivate: [IsLoggedIn],
      },
      {
        path: 'myorders',
        loadChildren: () =>
          import('libs/my-orders/src').then((m) => m.MyOrdersModule),
        canActivate: [IsLoggedIn],
      },
      {
        path: 'settings',
        loadChildren: () =>
        import('libs/settings/src').then((m) => m.SettingsModule),
        canActivate: [IsLoggedIn],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/app/books',
      },
    ],
  },

  {
    path: 'auth',

    loadChildren: () =>
      import('libs/auth-user/src').then((m) => m.AuthUserModule),
    canActivate: [IsLoggedOut],
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('libs/checkout/src').then((m) => m.CheckoutModule),
    canActivate: [IsLoggedIn],
  },
  {
    path: '**',
    redirectTo: '/app/books',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// {
//   path: 'order',
//   loadChildren: () =>
//     import('libs/order').then((m) => m.OrderModule),
//   canActivate: [IsLoggedIn],
// },
function matcherFunction(url: UrlSegment[]) {
  if (url.length == 1) {
      const path = url[0].path;
       if(path.startsWith('mylearning') 
         || path.startsWith('mylearning/success') 
         || path.startsWith('books/cancel')
         ){
        return {consumed: url};
      }
  }
  return null;
}