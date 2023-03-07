import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer = new Customer('', '', new Date(), 0, '');
  @Output() onBackClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onBackHandler() {
    this.onBackClick.emit(true);
  }
}
