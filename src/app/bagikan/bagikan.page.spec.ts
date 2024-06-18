import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BagikanPage } from './bagikan.page';

describe('BagikanPage', () => {
  let component: BagikanPage;
  let fixture: ComponentFixture<BagikanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BagikanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
