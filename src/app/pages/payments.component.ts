import { Component, OnChanges, OnInit } from '@angular/core';
import { PaymentsService } from '../services/payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  /**
   * TODO: criar um crud para buscar, listar, enviar e atualizar produtos da https://fakestoreapi.com/
   *  */ 
  products: object[] = [
    {
      name: 'produto 01',
      price: 1234    
    },
    {
      name: 'produto 02',
      price: 1234    
    },
    {
      name: 'produto 03',
      price: 1234    
    }
  ];

}
