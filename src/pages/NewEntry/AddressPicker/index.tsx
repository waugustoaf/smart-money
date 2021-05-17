import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../utils/colors';
import NetInfo from '@react-native-community/netinfo';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { Button, Container } from './styles';
import { key } from '../../../../google-api';
import { Alert } from 'react-native';

interface AddressPickerProps {
  setLatitude: React.Dispatch<React.SetStateAction<number | undefined>>;
  setLongitude: React.Dispatch<React.SetStateAction<number | undefined>>;
  setAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
  address: string | undefined;
}

interface GeoPositionProps {
  lat: number;
  lng: number;
}

export const NewEntryAddressPicker: React.FC<AddressPickerProps> = ({
  setLatitude,
  setLongitude,
  setAddress,
  address,
}) => {
  const getFormattedPosition = async ({ lat, lng }: GeoPositionProps) => {
    try {
      Geocoder.init(key);
      const response = await Geocoder.from({ lat, lng });
      const formattedAddress = response.results[0].formatted_address;

      return formattedAddress;
    } catch (err) {
      Alert.alert(
        'Não foi possível conseguir sua localização 😢',
        'Por favor, verifique se nos concedeu a permissão de localização',
      );
    }
  };

  const getLtdLgtPosition = async () => {
    Geolocation.getCurrentPosition(
      async position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const formattedAddress = await getFormattedPosition({ lat, lng });

        if (!formattedAddress) {
          return;
        }

        Alert.alert('Localização', formattedAddress, [
          {
            text: 'Cancelar',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: !!address ? 'Substituir' : 'Confirmar',
            onPress: () => {
              setLatitude(lat);
              setLongitude(lng);
              setAddress(formattedAddress);
            },
          },
        ]);
      },
      error => {
        Alert.alert(
          'Não foi possível conseguir sua localização 😢',
          'Por favor, verifique se nos concedeu a permissão de localização',
        );
      },
    );
  };

  const handleButtonPress = async () => {
    const networkStatus = await NetInfo.fetch();

    if (!networkStatus.isConnected) {
      Alert.alert(
        'Não foi possível obter a localização',
        'Sem conexão com a internet no momento. Por favor, tente mais tarde',
      );
      return;
    }

    getLtdLgtPosition();
  };

  return (
    <Container>
      <Button onPress={handleButtonPress} isActive={!!address}>
        <Icon name="location-pin" size={30} color={Colors.white} />
      </Button>
    </Container>
  );
};
