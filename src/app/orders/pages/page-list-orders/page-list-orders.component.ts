import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { Subscription, Observable, Subject } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  // public collection: Order[];
  public collection$: Observable<Order[]>;
  // public collection$: Subject<Order[]> = new Subject();
  public headers: string[];
  public states = Object.values(StateOrder);
  // private sub: Subscription;
  constructor(
    private os: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.collection$ = this.os.collection;
    // this.os.collection.subscribe(
    //   (col) => {
    //     this.collection$.next(col);
    //   }
    // );
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  public changeState(item: Order, e) {
    this.os.changeState(item, e.target.value).subscribe((res) => {
      // traiter res api
      item.state = res.state;
    });
  }

  public popup() {
    console.log('popup active');

  }

  public edit(item: Order) {
    this.router.navigate(['orders', 'edit', item.id]);
  }


  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
