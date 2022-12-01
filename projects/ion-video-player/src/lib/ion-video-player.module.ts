import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { IonVideoPlayerComponent } from './ion-video-player.component';
import { SecondsToHoursPipe } from './pipes/seconds-to-hours.pipe';

@NgModule({
  declarations: [
    IonVideoPlayerComponent,
    SecondsToHoursPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    IonVideoPlayerComponent,
    SecondsToHoursPipe
  ]
})
export class IonVideoPlayerModule { }
