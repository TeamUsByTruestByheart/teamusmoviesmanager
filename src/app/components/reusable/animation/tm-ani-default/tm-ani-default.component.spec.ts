import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmAniDefaultComponent } from './tm-ani-default.component';

describe('TmAniDefaultComponent', () => {
  let component: TmAniDefaultComponent;
  let fixture: ComponentFixture<TmAniDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmAniDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmAniDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
