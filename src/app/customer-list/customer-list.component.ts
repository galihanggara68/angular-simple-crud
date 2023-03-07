import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  @Input('customers') customers: Customer[] = [];
  @Output() onSelectedCustomer = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEditCustomerHandler(index: number) {
    this.onSelectedCustomer.emit({
      index,
      type: 'update',
    });
  }

  onDeleteCustomerHandler(index: number) {
    this.onSelectedCustomer.emit({
      index,
      type: 'delete',
    });
  }

  onDetailCustomerHandler(index: number) {
    this.onSelectedCustomer.emit({
      index,
      type: 'detail',
    });
  }
}
