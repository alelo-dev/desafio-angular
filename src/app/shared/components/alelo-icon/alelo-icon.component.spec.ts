import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleloIconComponent } from './alelo-icon.component';

describe('AleloIconComponent', () => {
  let component: AleloIconComponent;
  let fixture: ComponentFixture<AleloIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AleloIconComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AleloIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have inputs properties call', () => {
    component.ngOnInit();

    expect(component.width).not.toBeDefined();
    expect(component.height).not.toBeDefined();
    expect(component.icon).not.toBeDefined();
  });
});
