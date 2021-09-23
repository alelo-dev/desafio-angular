import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AleloLoadingComponent } from './alelo-loading.component';

describe('AleloLoadingComponent', () => {
  let component: AleloLoadingComponent;
  let fixture: ComponentFixture<AleloLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AleloLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AleloLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
