import { TestBed } from '@angular/core/testing';

import { IonVideoPlayerService } from './ion-video-player.service';

describe('IonVideoPlayerService', () => {
  let service: IonVideoPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonVideoPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
