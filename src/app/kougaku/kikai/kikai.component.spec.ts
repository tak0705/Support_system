import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KikaiComponent } from './kikai.component';

describe('KikaiComponent', () => {
  let component: KikaiComponent;
  let fixture: ComponentFixture<KikaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KikaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KikaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
