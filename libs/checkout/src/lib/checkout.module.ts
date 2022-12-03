import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from 'libs/utils/src';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { BookBaseModule, BooksResolver } from 'libs/book-base/src';
import { environment } from 'environments/environment';

const routes: Routes = [
  
  {
    path: 'placeorder/:id',
    component: PlaceOrderComponent,
    resolve: {
      books: BooksResolver,
    },
  },

];

@NgModule({
  imports: [
    BookBaseModule,
    CommonModule,
    ReactiveFormsModule,
    UtilsModule,
    RouterModule.forChild(routes),
    // NgxStripeModule.forChild(environment.STRIPE_KEY),

  ],
  declarations: [PlaceOrderComponent],
})
export class CheckoutModule {}
