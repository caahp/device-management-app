import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSidenavComponent } from './custom-sidenav.component';

describe('CustomSidenavComponent', () => {
  let component: CustomSidenavComponent;
  let fixture: ComponentFixture<CustomSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomSidenavComponent]
    });
    fixture = TestBed.createComponent(CustomSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
