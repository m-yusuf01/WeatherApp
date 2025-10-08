export default function getImageForWeather(weather) {
    switch (weather) {
      case 'Clear':
        return require('../assets/images/clear.png');
      case 'Hail':
        return require('../assets/images/hail.png');
      case 'Showers':
        return require('../assets/images/showers.png');
      case 'Light Cloud':
      case 'Clouds':
        return require('../assets/images/clouds.png');
      default:
        return require('../assets/images/clear.png');
    }
  }
  