/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WaterService } from './water.service';

describe('WaterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaterService]
    });
  });

  it('should ...', inject([WaterService], (service: WaterService) => {
    expect(service).toBeTruthy();
  }));
});
