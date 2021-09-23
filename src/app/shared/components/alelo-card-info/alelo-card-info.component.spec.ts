import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleloCardInfoComponent } from './alelo-card-info.component';
import { AleloIconComponent } from '../alelo-icon/alelo-icon.component';

import { MockComponent } from 'ng-mocks';

describe('AleloCardInfoComponent', () => {
  let component: AleloCardInfoComponent;
  let fixture: ComponentFixture<AleloCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AleloCardInfoComponent, MockComponent(AleloIconComponent)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AleloCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have inputs properties call', () => {
    component.ngOnInit();

    expect(component.theme).toBeDefined();
    expect(component.type).toBeDefined();
    expect(component.title).not.toBeDefined();
    expect(component.description).not.toBeDefined();
    expect(component.icon).not.toBeDefined();
  });
});
