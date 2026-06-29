import { TestBed } from '@angular/core/testing';

import { Medicina } from './medicina';

describe('Medicina', () => {
  let service: Medicina;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Medicina);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
