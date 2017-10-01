import { TestBed, inject } from '@angular/core/testing';

import { SentimentsService } from './sentiments.service';

xdescribe('SentimentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SentimentsService],
    });
  });

  it('should be created', inject([SentimentsService], (service: SentimentsService) => {
    expect(service).toBeTruthy();
  }));
});
