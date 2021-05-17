import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { Alert } from 'react-native';
import { key } from '../../google-api';

interface GeoProps {
  latitude: number;
  longitude: number;
}

interface AddressPickerProps {
  setLatitude: React.Dispatch<React.SetStateAction<number | undefined>>;
  setLongitude: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export const getGeoPosition = ({
  setLatitude,
  setLongitude,
}: AddressPickerProps) => {
  Geolocation.getCurrentPosition(
    position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLatitude(latitude);
      setLongitude(longitude);
    },
    error => {
      Alert.alert(
        'Não foi possível recuperar sua localização. Certifique-se de ter nos dado a permissão de localização',
      );
      console.error('Error on get usedLocation', error);
    },
  );
};

export const getFormattedAddress = ({ latitude, longitude }: GeoProps) => {
  Geocoder.init(key);

  Geocoder.from({ latitude, longitude })
    .then(json => {
      const formattedAddress = json.results[0].formatted_address;
      Alert.alert(`Endereço formatado: ${formattedAddress}`);
    })
    .catch(err => console.error(err));
};
