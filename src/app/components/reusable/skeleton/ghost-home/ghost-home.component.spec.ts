import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostHomeComponent } from './ghost-home.component';

describe('GhostHomeComponent', () => {
  let component: GhostHomeComponent;
  let fixture: ComponentFixture<GhostHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
