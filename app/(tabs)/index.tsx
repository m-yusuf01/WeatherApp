import React, { useState } from 'react';
import { Image, ImageBackground, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type WeatherType = 'clouds' | 'hail' | 'rain' | 'showers' | 'sun' | 'snow';


type City = {
  id: number;
  name: string;
  temperature: number;
  weather: WeatherType;
};

// 81 il örnek veri
const cities: City[] = [
  { id: 1, name: 'Adana', temperature: 30, weather: 'sun' },
  { id: 2, name: 'Adıyaman', temperature: 29, weather: 'clouds' },
  { id: 3, name: 'Afyonkarahisar', temperature: 25, weather: 'rain' },
  { id: 4, name: 'Ağrı', temperature: 5, weather: 'snow' },
  { id: 5, name: 'Amasya', temperature: 22, weather: 'showers' },
  { id: 6, name: 'Ankara', temperature: 24, weather: 'clouds' },
  { id: 7, name: 'Antalya', temperature: 33, weather: 'sun' },
  { id: 8, name: 'Artvin', temperature: 18, weather: 'rain' },
  { id: 9, name: 'Aydın', temperature: 28, weather: 'sun' },
  { id: 10, name: 'Balıkesir', temperature: 23, weather: 'clouds' },
  { id: 11, name: 'Bilecik', temperature: 21, weather: 'showers' },
  { id: 12, name: 'Bingöl', temperature: 16, weather: 'hail' },
  { id: 13, name: 'Bitlis', temperature: 14, weather: 'hail' },
  { id: 14, name: 'Bolu', temperature: 20, weather: 'clouds' },
  { id: 15, name: 'Burdur', temperature: 27, weather: 'sun' },
  { id: 16, name: 'Bursa', temperature: 25, weather: 'clouds' },
  { id: 17, name: 'Çanakkale', temperature: 22, weather: 'showers' },
  { id: 18, name: 'Çankırı', temperature: 23, weather: 'clouds' },
  { id: 19, name: 'Çorum', temperature: 24, weather: 'sun' },
  { id: 20, name: 'Denizli', temperature: 29, weather: 'sun' },
  { id: 21, name: 'Diyarbakır', temperature: 32, weather: 'sun' },
  { id: 22, name: 'Edirne', temperature: 26, weather: 'clouds' },
  { id: 23, name: 'Elazığ', temperature: 27, weather: 'showers' },
  { id: 24, name: 'Erzincan', temperature: 20, weather: 'rain' },
  { id: 25, name: 'Erzurum', temperature: 1, weather: 'snow' },
  { id: 26, name: 'Eskişehir', temperature: 24, weather: 'clouds' },
  { id: 27, name: 'Gaziantep', temperature: 31, weather: 'sun' },
  { id: 28, name: 'Giresun', temperature: 19, weather: 'rain' },
  { id: 29, name: 'Gümüşhane', temperature: 17, weather: 'clouds' },
  { id: 30, name: 'Hakkari', temperature: 4, weather: 'snow' },
  { id: 31, name: 'Hatay', temperature: 30, weather: 'sun' },
  { id: 32, name: 'Isparta', temperature: 25, weather: 'sun' },
  { id: 33, name: 'Mersin', temperature: 31, weather: 'sun' },
  { id: 34, name: 'İstanbul', temperature: 27, weather: 'clouds' },
  { id: 35, name: 'İzmir', temperature: 29, weather: 'sun' },
  { id: 36, name: 'Kars', temperature: 2, weather: 'snow' },
  { id: 37, name: 'Kastamonu', temperature: 18, weather: 'clouds' },
  { id: 38, name: 'Kayseri', temperature: 19, weather: 'clouds' },
  { id: 39, name: 'Kırklareli', temperature: 23, weather: 'clouds' },
  { id: 40, name: 'Kırşehir', temperature: 24, weather: 'sun' },
  { id: 41, name: 'Kocaeli', temperature: 26, weather: 'clouds' },
  { id: 42, name: 'Konya', temperature: 28, weather: 'sun' },
  { id: 43, name: 'Kütahya', temperature: 22, weather: 'clouds' },
  { id: 44, name: 'Malatya', temperature: 28, weather: 'sun' },
  { id: 45, name: 'Manisa', temperature: 30, weather: 'sun' },
  { id: 46, name: 'Kahramanmaraş', temperature: 31, weather: 'sun' },
  { id: 47, name: 'Mardin', temperature: 32, weather: 'sun' },
  { id: 48, name: 'Muğla', temperature: 30, weather: 'sun' },
  { id: 49, name: 'Muş', temperature: 15, weather: 'hail' },
  { id: 50, name: 'Nevşehir', temperature: 27, weather: 'sun' },
  { id: 51, name: 'Niğde', temperature: 26, weather: 'sun' },
  { id: 52, name: 'Ordu', temperature: 20, weather: 'rain' },
  { id: 53, name: 'Rize', temperature: 18, weather: 'rain' },
  { id: 54, name: 'Sakarya', temperature: 25, weather: 'clouds' },
  { id: 55, name: 'Samsun', temperature: 23, weather: 'clouds' },
  { id: 56, name: 'Siirt', temperature: 29, weather: 'sun' },
  { id: 57, name: 'Sinop', temperature: 19, weather: 'rain' },
  { id: 58, name: 'Sivas', temperature: 3, weather: 'snow' },
  { id: 59, name: 'Tekirdağ', temperature: 24, weather: 'clouds' },
  { id: 60, name: 'Tokat', temperature: 22, weather: 'clouds' },
  { id: 61, name: 'Trabzon', temperature: 20, weather: 'rain' },
  { id: 62, name: 'Tunceli', temperature: 18, weather: 'clouds' },
  { id: 63, name: 'Şanlıurfa', temperature: 33, weather: 'sun' },
  { id: 64, name: 'Uşak', temperature: 27, weather: 'sun' },
  { id: 65, name: 'Van', temperature: 16, weather: 'hail' },
  { id: 66, name: 'Yozgat', temperature: 21, weather: 'clouds' },
  { id: 67, name: 'Zonguldak', temperature: 20, weather: 'clouds' },
  { id: 68, name: 'Aksaray', temperature: 28, weather: 'sun' },
  { id: 69, name: 'Bayburt', temperature: 17, weather: 'clouds' },
  { id: 70, name: 'Karaman', temperature: 29, weather: 'sun' },
  { id: 71, name: 'Kırıkkale', temperature: 26, weather: 'sun' },
  { id: 72, name: 'Batman', temperature: 32, weather: 'sun' },
  { id: 73, name: 'Şırnak', temperature: 31, weather: 'sun' },
  { id: 74, name: 'Bartın', temperature: 22, weather: 'clouds' },
  { id: 75, name: 'Ardahan', temperature: 15, weather: 'hail' },
  { id: 76, name: 'Iğdır', temperature: 28, weather: 'sun' },
  { id: 77, name: 'Yalova', temperature: 25, weather: 'clouds' },
  { id: 78, name: 'Karabük', temperature: 23, weather: 'clouds' },
  { id: 79, name: 'Kilis', temperature: 30, weather: 'sun' },
  { id: 80, name: 'Osmaniye', temperature: 32, weather: 'sun' },
  { id: 81, name: 'Düzce', temperature: 22, weather: 'clouds' },
];

export default function CityInput() {
  const [input, setInput] = useState('');
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const getWeatherIcon = (weather: WeatherType) => {
    switch (weather) {
      case 'clouds':
        return require('../../assets/images/clouds.png');
      case 'hail':
        return require('../../assets/images/hail.png');
      case 'rain':
        return require('../../assets/images/rain.png');
      case 'showers':
        return require('../../assets/images/showers.png');
      case 'snow': 
        return require('../../assets/images/snow.png');
      default:
        return require('../../assets/images/sun.png');
    }
  };

  const getWeatherText = (weather: WeatherType) => {
    switch (weather) {
      case 'clouds': return 'Bulutlu';
      case 'hail': return 'Dolu';
      case 'rain': return 'Yağmurlu';
      case 'showers': return 'Sağanak yağmurlu';
      case 'sun': return 'Güneşli';
      case 'snow': return 'Karlı';
      default: return '';
    }
  };

  const handleSubmit = () => {
    const city = cities.find(c => c.name.toLowerCase() === input.trim().toLowerCase());
    if (city) {
      setSelectedCity(city);
      Keyboard.dismiss();
    } else {
      alert('Şehir bulunamadı!');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/clear.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.centerBox}>
        <TextInput
          placeholder="Şehir yazın (ör: İstanbul)"
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={{ color: 'white' }}>Göster</Text>
        </TouchableOpacity>

        {selectedCity && (
          <View style={styles.infoContainer}>
            <Text style={styles.cityName}>{selectedCity.name}</Text>
            <Text style={styles.temperature}>{selectedCity.temperature}°C</Text>
            <Image
              source={getWeatherIcon(selectedCity.weather)}
              style={styles.icon}
            />
            <Text style={styles.weatherText}>{getWeatherText(selectedCity.weather)}</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  centerBox: { width: '80%', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.6)', padding: 20, borderRadius: 12 },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  infoContainer: { alignItems: 'center', marginTop: 20 },
  cityName: { fontSize: 22, fontWeight: 'bold' },
  temperature: { fontSize: 20, marginVertical: 5 },
  icon: { width: 80, height: 80 },
  weatherText: { fontSize: 18, marginTop: 5, fontStyle: 'italic' },
});
