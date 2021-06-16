import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-widget',
  templateUrl: './promotion-widget.component.html',
  styleUrls: ['./promotion-widget.component.scss']
})
export class PromotionWidgetComponent implements OnInit {
  @Input() widget: string;

  ngOnInit(): void {
  }

}
