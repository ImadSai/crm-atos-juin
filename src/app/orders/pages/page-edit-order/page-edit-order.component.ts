import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  // public initItem: Order;
  public item$: Observable<Order>;

  constructor(
    private route: ActivatedRoute,
    private os: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.os.getItemById(params.get('id')).subscribe((data) => {
    //     this.initItem = data;
    //   });
    // });

    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.os.getItemById(params.get('id')))
    );
  }

  public update(item: Order) {
    // console.log(item);
    this.os.update(item).subscribe((res) => {
      this.router.navigate(['orders']);
    });

  }

}
