import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alelo-button',
  templateUrl: './alelo-button.component.html',
  styleUrls: ['./alelo-button.component.scss']
})
export class AleloButtonComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() type = 'solid';

  @Output() actionButton = new EventEmitter<void>();

  constructor() {
    this.actionButton = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onAction(): void {
    this.actionButton.emit();
  }

}
