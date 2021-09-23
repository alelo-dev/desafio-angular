import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alelo-card-info',
  templateUrl: './alelo-card-info.component.html',
  styleUrls: ['./alelo-card-info.component.scss']
})
export class AleloCardInfoComponent implements OnInit {

  @Input() type: 'default' | 'dynamic' = 'default';
  @Input() theme: 'primary' | 'secondary' = 'primary';
  @Input() title: string;
  @Input() description: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
