import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeimeiComponent } from './seimei.component';

describe('SeimeiComponent', () => {
  let component: SeimeiComponent;
  let fixture: ComponentFixture<SeimeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeimeiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeimeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
