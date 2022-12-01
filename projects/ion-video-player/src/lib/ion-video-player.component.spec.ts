import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonVideoPlayerComponent } from './ion-video-player.component';

describe('IonVideoPlayerComponent', () => {
  let component: IonVideoPlayerComponent;
  let fixture: ComponentFixture<IonVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonVideoPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IonVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
