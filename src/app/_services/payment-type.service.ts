import { Injectable } from '@angular/core';
import { paymentType } from '../_models/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  paymentTypeMethods : paymentType[] = [
    {id: 1, name: 'Direct Bank Transfare'},
    {id: 2, name: 'Cheque Payment'},
    {id: 3, name: 'Paypal'},
    {id: 4, name: 'Visa'},
    {id: 5, name: 'Mastercard'},
    {id: 6, name: 'Meza'},
    {id: 7, name: 'On Dilivery'},
  ]
  constructor() { }

  getAllPaymentTypes(): paymentType[]{
    return [...this.paymentTypeMethods];
  }

  getPaymentTypeById(id: number): paymentType | undefined{
   return this.paymentTypeMethods.find((p)=>p.id === id);
  }

  save(){}
  update(){}
  delete(){}
}
