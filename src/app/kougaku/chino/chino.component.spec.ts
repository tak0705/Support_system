import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinoComponent } from './chino.component';

describe('ChinoComponent', () => {
  let component: ChinoComponent;
  let fixture: ComponentFixture<ChinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
