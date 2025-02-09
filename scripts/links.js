import QRCode from 'qrcode';

const canvasElement = document.getElementById('slides-qr-link');
const linkElement = document.getElementById('slides-link');

const slidesUrl = new URL(window.location.href);

linkElement.textContent = slidesUrl.host;

const computedStyles = window.getComputedStyle(canvasElement);

QRCode.toCanvas(canvasElement, slidesUrl.origin, {
  width: 200,
  margin: 0,
  color: {
    light: computedStyles.getPropertyValue('--r-background-color'),
    dark: computedStyles.getPropertyValue('--r-selection-color')
  }
}, function (error) {
  console.error(error);
});

