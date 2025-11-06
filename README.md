# Restore EduSkracacz
## Allows you to use the EDUVulcan site again as a link "shortener" by base32 redirect from eduvulcan.pl/dziennik


## Installation
<a href="https://addons.mozilla.org/pl/firefox/addon/restore-eduskracacz285/"><img src="./assets/add_to_firefox.svg"></a>
<a href="https://chromewebstore.google.com/detail/restore-eduskracacz/mpjaamhmkedhleogdkjlcnnjbgonjign"><img src="./assets/add_to_chrome.svg"></a><br>
[Development installation instructions](https://es.cvp.ovh/restoreduskracacz.html)

## Development Workflow
### Firefox
To load addon from files in Firefox, you need to go to `about:debugging#/runtime/this-firefox` and click `Load Temporary Add-on...`. After that you need to select manifest.json file in file picker.<br>
<img src="./screenshots/firefoxDebug.png">
### Chrome
To load extension from files in Chrome, you need to go to `chrome://extensions/` and click `Load unpacked` (with developer mode enabled)<br>
<img src="./screenshots/chromeDebug.png">
