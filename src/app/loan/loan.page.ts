import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {
  price: number;
  duration: number;
  payPerMonth: number;
  private interest = 0.01;

  constructor() { }

  ngOnInit () {
  }

  onSubmit (event: any) {
    event.preventDefault();
    let payment = (this.price / (this.duration * 12));
    payment += (this.interest * payment);
    this.payPerMonth = Math.round(payment);
  }

  onCancel () {
    this.price = this.duration = this.payPerMonth = null;
  }

}
