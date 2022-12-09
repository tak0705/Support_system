import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OukaComponent } from './ouka.component';

describe('OukaComponent', () => {
  let component: OukaComponent;
  let fixture: ComponentFixture<OukaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OukaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
