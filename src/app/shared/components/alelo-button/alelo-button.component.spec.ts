import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleloButtonComponent } from './alelo-button.component';

describe('AleloButtonComponent', () => {
  let component: AleloButtonComponent;
  let fixture: ComponentFixture<AleloButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AleloButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AleloButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have onAction function', () => {
    const actionButtonSPy = spyOn(component.actionButton, 'emit');

    component.onAction();

    expect(actionButtonSPy).toHaveBeenCalledTimes(1);
  });

  it('should have inputs properties call', () => {
    component.ngOnInit();

    expect(component.icon).not.toBeDefined();
    expect(component.label).not.toBeDefined();
    expect(component.type).toBeDefined();
  });
});
