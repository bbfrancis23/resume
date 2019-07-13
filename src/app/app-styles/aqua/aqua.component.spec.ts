import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaComponent } from './aqua.component';

describe('AquaComponent', () => {
  let component: AquaComponent;
  let fixture: ComponentFixture<AquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
