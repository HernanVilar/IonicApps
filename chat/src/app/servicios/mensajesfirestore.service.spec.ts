import { TestBed } from '@angular/core/testing';

import { MensajesfirestoreService } from './mensajesfirestore.service';

describe('MensajesfirestoreService', () => {
  let service: MensajesfirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajesfirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
