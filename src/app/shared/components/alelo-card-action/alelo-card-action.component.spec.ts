import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleloCardActionComponent } from './alelo-card-action.component';
import { AleloButtonComponent } from '../alelo-button/alelo-button.component';

import { MockComponent } from 'ng-mocks';

describe('AleloCardActionComponent', () => {
  let component: AleloCardActionComponent;
  let fixture: ComponentFixture<AleloCardActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AleloCardActionComponent, MockComponent(AleloButtonComponent)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AleloCardActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have inputs properties call', () => {
    component.ngOnInit();

    expect(component.theme).toBeDefined();
    expect(component.title).not.toBeDefined();
    expect(component.description).not.toBeDefined();
    expect(component.labelButton).not.toBeDefined();
    expect(component.iconButton).not.toBeDefined();
  });

  it('should have onAction function', () => {
    const actionCardSpy = spyOn(component.actionCard, 'emit');

    component.onAction();

    expect(actionCardSpy).toHaveBeenCalledTimes(1);
  });
});
