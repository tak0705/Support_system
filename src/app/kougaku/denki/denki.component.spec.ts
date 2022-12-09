import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenkiComponent } from './denki.component';

describe('DenkiComponent', () => {
  let component: DenkiComponent;
  let fixture: ComponentFixture<DenkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenkiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
