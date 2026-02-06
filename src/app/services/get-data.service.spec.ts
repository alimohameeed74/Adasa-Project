/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { GetDataService } from './get-data.service';

describe('Service: GetData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataService],
    });
  });

  it('should ...', inject([GetDataService], (service: GetDataService) => {
    expect(service).toBeTruthy();
  }));
});
