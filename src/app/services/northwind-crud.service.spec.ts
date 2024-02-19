import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindCRUDService } from './northwind-crud.service';

describe('NorthwindCRUDService', () => {
  let service: NorthwindCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
