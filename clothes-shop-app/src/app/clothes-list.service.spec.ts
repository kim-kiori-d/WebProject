import { TestBed } from '@angular/core/testing';

import { ClothesListService } from './clothes-list.service';

describe('ClothesListService', () => {
  let service: ClothesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
