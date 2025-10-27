import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SitTestPage } from './sit-test.page';

describe('SitTestPage', () => {
  let component: SitTestPage;
  let fixture: ComponentFixture<SitTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SitTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
