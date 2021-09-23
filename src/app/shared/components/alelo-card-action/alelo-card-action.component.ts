import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alelo-card-action',
  templateUrl: './alelo-card-action.component.html',
  styleUrls: ['./alelo-card-action.component.scss']
})
export class AleloCardActionComponent implements OnInit {

  @Input() theme: 'primary' | 'secondary' = 'primary';
  @Input() title: string;
  @Input() description: string;

  @Input() labelButton: string;
  @Input() iconButton: string;

  @Output() actionCard = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onAction(): void {
    this.actionCard.emit();
  }

}
