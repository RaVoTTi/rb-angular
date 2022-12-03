import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBaseComponent } from './book-base.component';

describe('BookBaseComponent', () => {
  let component: BookBaseComponent;
  let fixture: ComponentFixture<BookBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
