<h1 align="center">ion-video-player</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/saqib92/ion-video-player#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/saqib92/ion-video-player/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/saqib92/ion-video-player/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

## 📝 Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Setup](#setup)
- [Usage](#usage)
- [Author](#author)
- [Contributing](#contributing)
- [Show your support](#support)
- [License](#license)

## ✅ Prerequisites <a name = "prerequisites"></a>

The current version of the library is compatible with Ionic 6+.

## ⬇️ Install <a name = "install"></a>

Using npm

```sh
npm install ion-video-player --save
```

Using yarn

```sh
yarn add ion-video-player
```

## 🛠 Setup <a name = "setup"></a>

Once installed you need to import our module in the parent module for the component you will be using it in:

```js
import { IonVideoPlayerModule } from 'ion-video-player';

@NgModule({
  ...
  imports: [IonVideoPlayerModule, ...],
  ...
})
export class YourModule {
}
```

## Usage <a name = "usage"></a>

Include the component on page template, like the example below:

```
  <ion-video-player [options]="{
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    type: 'video/mp4',
    poster:'https://via.placeholder.com/500x400',
    controls: true,
    autoplay: false,
    muted: false
  }"
  (play)="yourEvent()"
  (pause)="yourEvent()"
  (ended)="yourEvent()"
  (volumechange)="yourEvent()"
  (playing)="yourEvent()"
  (error)="yourEvent()"
  (error)="yourEvent()"
  ></ion-video-player>
```

### API

### Properties
- options
 - src: `string` any valid video link/path
 - type: `string` video mimetype.  e.g: `'video/mp4'`
 - poster: `string` any valid poster image link/path
 - controls: `boolean` show constrols on video element
 - autoplay: `boolean` auto play video
 - muted: `boolean` to mute video 

## CSS

Apply css to video element. 

```
  ::ng-deep .ion-video-player{
    width: 100%!important;
    height: 400px!important;  
  }
```

## Author <a name = "author"></a>

👤 **Najam Us Saqib**

- Github: [@saqib92](https://github.com/saqib92)

## 🤝 Contributing <a name = "contributing"></a>

Contributions, issues and feature requests are welcome!<br />
Feel free to check [issues page](https://github.com/saqib92/ion-video-player/issues).

## Show your support <a name = "support"></a>

Give a ⭐️ if this project helped you!

## 📝 License <a name = "license"></a>

Copyright © 2022 [Saqb92](https://github.com/saqib92).<br />
This project is [MIT](https://github.com/saqib92/ion-video-player/blob/master/LICENSE) licensed.
