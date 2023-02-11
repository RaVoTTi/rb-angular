import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'libs/utils/src';
import { take } from 'rxjs';
import { MyOrdersService } from '../../services/my-orders.service';

@Component({
  selector: 'frontend-my-order-view',
  templateUrl: './my-order-view.component.html',
})
export class MyOrderViewComponent implements OnInit {
  order!: IOrder;
  orderId!: string;

  constructor(
    private route: ActivatedRoute,
    private myOrdersService: MyOrdersService
  ) {}

  reload() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.orderId = params['id'];
        console.log(this.orderId);
      }
    });
    this.myOrdersService
      .getMyOrderById(this.orderId)
      .pipe(take(1))
      .subscribe(({ result }) => {
        if (result) {
          this.order = result;
        console.log( this.order);

        }
      });
  }
  ngOnInit(): void {
    this.reload()
  }
}
