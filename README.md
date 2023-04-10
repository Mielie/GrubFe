# GrubFe

This is a front end client for the Grub service. The backend can be found on Github [here](https://github.com/Mielie/GrubBE).

This client is designed to run on an Android mobile device and is written using React Native (v0.70.5) using Expo (v47.0.13).

## Installation

Clone this repository

`git clone https://github.com/Mielie/GrubFe`

Then install the dependencies with npm in the project subfolder called GrubApp:

`cd GrubFe/GrubApp`  
`npm install`

The client uses react-native-maps and a valid Google Maps API key is required. The key should be stored in a file called `googleMapsAPIKey.js` in the GrubApp sub folder. An example of the file is below:

```
exports.GOOGLE_API_KEY = "<your-api-key>";
```

### Running on emulator

Make sure you have a version of Android Studio installed and start an virtual Android Device from the start menu (More Actions -> Virtual Device Manager). Grub was developed and tested using both the Resizeable (Experimental) Device with UpsideDownCake and also a Pixel 6 with API 33.

From the GrubApp folder execute the Android script:

`npm run android`
