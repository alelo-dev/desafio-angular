import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alelo-icon',
  templateUrl: './alelo-icon.component.html',
  styleUrls: ['./alelo-icon.component.scss']
})
export class AleloIconComponent implements OnInit {

  @Input() width: number;
  @Input() height: number;
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
