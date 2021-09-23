import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/products/product.model';

@Component({
  selector: 'alelo-table',
  templateUrl: './alelo-table.component.html',
  styleUrls: ['./alelo-table.component.scss']
})
export class AleloTableComponent implements OnInit {

  @Input() data: Product[];
  @Input() columns: string[];

  constructor() { }

  ngOnInit(): void {
  }

  onToHire(): void {
    alert('Contratado');
  }

}
