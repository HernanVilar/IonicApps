import { TestBed } from '@angular/core/testing';

import { MensajesrealtimeService } from './mensajesrealtime.service';

describe('MensajesrealtimeService', () => {
  let service: MensajesrealtimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajesrealtimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
