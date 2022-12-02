import { Component, OnChanges, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ion-video-player',
  templateUrl: 'ion-video-player.html',
  styleUrls: ['ion-video-player.scss']
})
export class IonVideoPlayerComponent implements OnChanges {
  // Get a handle to the player
  @ViewChild('playerContainer') playerContainer!: ElementRef;
  @ViewChild('player') videoPlayer!: ElementRef;
  @ViewChild('progressBar') progressBar!: ElementRef;
  @ViewChild('volumeBar') volumeBar!: ElementRef;

  isPlaying: boolean = false;
  volume: number = 100;

  //Input options
  @Input() options!: {
    src: string;
    type: string;
    poster: string;
    autoplay: boolean;
    muted: boolean;
    controls: boolean
  };

  //Output Events
  @Output() play = new EventEmitter<any>();
  @Output() pause = new EventEmitter<any>();
  @Output() ended = new EventEmitter<any>();
  @Output() volumechange = new EventEmitter<any>();
  @Output() playing = new EventEmitter<any>();
  @Output() error = new EventEmitter<any>();

  ngOnChanges() {
  }

  setVolume() {
    if (this.volumeBar.nativeElement.value == '100') {
      this.volume = 1;
    } else {
      this.volume = parseFloat('0.' + (this.volumeBar.nativeElement.value));
    }
    this.videoPlayer.nativeElement.volume = this.volume;
  }

  playPauseVideo() {
    if (this.videoPlayer.nativeElement.paused || this.videoPlayer.nativeElement.ended) {
      // Change the button to a pause button
      this.videoPlayer.nativeElement.play();
      this.isPlaying = true;
    }
    else {
      // Change the button to a play button
      this.videoPlayer.nativeElement.pause();
      this.isPlaying = false;
    }
  }

  // Stop the current media from playing, and return it to the start position
  stopVideo() {
    this.videoPlayer.nativeElement.pause();
    this.isPlaying = false;
    if (this.videoPlayer.nativeElement.currentTime) this.videoPlayer.nativeElement.currentTime = 0;
  }

  // Toggles the media player's mute and unmute status
  muteVolume() {
    if (this.videoPlayer.nativeElement.muted) {
      this.videoPlayer.nativeElement.muted = false;
      this.volume = this.videoPlayer.nativeElement.volume;
    }
    else {
      this.videoPlayer.nativeElement.muted = true;
      this.volume = 0;
    }
  }

  // Replays the media currently loaded in the player
  replayVideo() {
    this.resetPlayer();
    this.videoPlayer.nativeElement.play();
  }

  // Update the progress bar
  updateProgressBar() {
    // Work out how much of the media has played via the duration and currentTime parameters
    var percentage = Math.floor((100 / this.videoPlayer.nativeElement.duration) * this.videoPlayer.nativeElement.currentTime);
    // Update the progress bar's value
    if (this.options.controls) {
      this.progressBar.nativeElement.value = percentage;
    }
  }

  seek(e: any) {
    var percent = e.offsetX / this.progressBar.nativeElement.offsetWidth;
    this.videoPlayer.nativeElement.currentTime = percent * this.videoPlayer.nativeElement.duration;
    e.target.value = Math.floor(percent / 100);
    e.target.innerHTML = this.progressBar.nativeElement.value + '% played';
  }

  //replay Video from start
  resetPlayer() {
    this.progressBar.nativeElement.value = 0;
    // Move the media back to the start
    this.videoPlayer.nativeElement.currentTime = 0;
  }

  //Open Player in Full screen mode
  toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (this.playerContainer.nativeElement.requestFullscreen) {
        this.playerContainer.nativeElement.requestFullscreen();
      } else if (this.playerContainer.nativeElement.webkitRequestFullscreen) { /* Safari */
        this.playerContainer.nativeElement.webkitRequestFullscreen();
      } else if (this.playerContainer.nativeElement.msRequestFullscreen) { /* IE11 */
        this.playerContainer.nativeElement.msRequestFullscreen();
      }
    }
  }

  async openPip() {
    try {
      if (!document.pictureInPictureElement) {
        this.videoPlayer.nativeElement.requestPictureInPicture()
      } else {
        document.exitPictureInPicture();
      }
    } catch (reason) {
      console.error(reason);
    }
  }

  // Fires when the audio/video has been started or is no longer paused
  onPlay() {
    console.log('onPlay')
    this.play.emit();
  }

  // Fires when the audio/video has been paused
  onPause() {
    console.log('onPause')
    this.pause.emit();
  }

  // Fires when the current playlist is ended
  onEnded() {
    console.log('onEnded')
    this.ended.emit();
  }

  // Fires when the volume has been changed
  onVolumechange() {
    console.log('onVolumechange')
    this.volumechange.emit();
  }

  onPlaying() {
    console.log('onPlaying')
    this.playing.emit();
  }

  onError() {
    console.log('onError')
    this.error.emit();
  }

  onProgress() {
    // this.videoPlayer.nativeElement.addEventListener('progress', () => {
    //   const duration = this.videoPlayer.nativeElement.duration;
    //   console.log(duration)
    //   if (duration > 0) {
    //     for (let i = 0; i < this.videoPlayer.nativeElement.buffered.length; i++) {
    //       if (
    //         this.videoPlayer.nativeElement.buffered.start(this.videoPlayer.nativeElement.buffered.length - 1 - i) <
    //         this.videoPlayer.nativeElement.currentTime
    //       ) {
    //         console.log(
    //           (this.videoPlayer.nativeElement.buffered.end(this.videoPlayer.nativeElement.buffered.length - 1 - i) * 100) / duration
    //         );
    //         break;
    //       }
    //     }
    //   }
    // });
  }

}
