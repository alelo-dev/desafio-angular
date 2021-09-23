import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleloTableComponent } from './alelo-table.component';
import { AleloButtonComponent } from '../alelo-button/alelo-button.component';

import { MockComponent } from 'ng-mocks';

describe('AleloTableComponent', () => {
  let component: AleloTableComponent;
  let fixture: ComponentFixture<AleloTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AleloTableComponent, MockComponent(AleloButtonComponent)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AleloTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have inputs properties call', () => {
    component.ngOnInit();

    expect(component.data).not.toBeDefined();
    expect(component.columns).not.toBeDefined();
  });
});
