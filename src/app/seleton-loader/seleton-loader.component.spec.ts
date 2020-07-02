import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletonLoaderComponent } from './seleton-loader.component';

describe('SeletonLoaderComponent', () => {
  let component: SeletonLoaderComponent;
  let fixture: ComponentFixture<SeletonLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletonLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
