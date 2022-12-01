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

  @Input() options = {
    src: '',
    type: '',
    autoplay: false,
    muted: true
  };

  @Output() ended = new EventEmitter<any>();

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
    this.progressBar.nativeElement.value = percentage;
    // Update the progress bar's text (for browsers that don't support the progress element)
    this.progressBar.nativeElement.innerHTML = percentage + '% played';
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
  openFullScreen() {
    if(document.fullscreenElement){
      document.exitFullscreen();
    }else{
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

  onPlay() {
    console.log('onPlay')
  }

  onPause() {
    console.log('onPause')
  }

  onEnded() {
    console.log('onEnded')
    this.ended.emit();
  }

  onVolumechange() {
    console.log('onVolumechange')
  }

  onPlaying() {
    console.log('onPlaying')
  }

  onError() {
    console.log('onError')
  }

}
