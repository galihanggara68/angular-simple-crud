import { Component } from '@angular/core';
import { Customer } from './models/customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customers: Customer[] = [];
  customer: Customer = new Customer('', '', new Date(), 0, '');
  editIndex: number = -1;
  detailIndex: number = -1;
  formOpen: boolean = false;

  onAddCustomerHandler() {
    this.formOpen = true;
  }

  onSelectedCustomerHandler(obj: any) {
    console.log(obj);
    if (obj.type == 'delete') {
      this.customers.splice(obj.index, 1);
    } else if (obj.type == 'update') {
      this.editIndex = obj.index;
    } else {
      this.detailIndex = obj.index;
    }
  }

  onSubmitCustomerHandler(obj: any) {
    console.log('created on parent');
    if (obj.index == -1) {
      this.customers.push(obj.customer);
    } else {
      this.customers[obj.index] = obj.customer;
    }
    console.log(this.customers);
    this.onBackHandler();
  }

  onBackHandler() {
    this.formOpen = false;
    this.editIndex = -1;
    this.detailIndex = -1;
  }

  getTitle() {
    if (this.editIndex > -1) {
      return 'Edit Customer';
    } else if (this.detailIndex > -1) {
      return 'Detail Customer';
    } else if (this.editIndex == -1) {
      return 'Add New Customer';
    }
    return 'Customer';
  }
}
