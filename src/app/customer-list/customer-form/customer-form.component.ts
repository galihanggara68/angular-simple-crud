import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  @Input() index: number = -1;
  @Input() customer: Customer = new Customer('', '', new Date(), 0, '');
  @Output() onSubmitCustomer = new EventEmitter();
  isNewCustomer: boolean = true;

  constructor() {}

  ngOnInit(): void {
    if (this.index == -1) {
      this.customer = new Customer('', '', new Date(), 0, '');
    }
    this.isNewCustomer = this.customer.name == '';
  }

  onSubmitCustomerHandler() {
    console.log('created');
    this.onSubmitCustomer.emit({
      customer: Object.assign(
        new Customer('', '', new Date(), 0, ''),
        this.customer
      ),
      index: this.index,
    });
  }
}
