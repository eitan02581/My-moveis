import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailesComponent } from './movie-detailes.component';

describe('MovieDetailesComponent', () => {
  let component: MovieDetailesComponent;
  let fixture: ComponentFixture<MovieDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
