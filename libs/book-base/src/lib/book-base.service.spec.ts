import { TestBed } from '@angular/core/testing';

import { BookBaseService } from './book-base.service';

describe('BookBaseService', () => {
  let service: BookBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
