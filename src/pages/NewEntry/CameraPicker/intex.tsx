import React, { useCallback, useState } from 'react';
import { Button, Container } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../utils/colors';
import { NewEntryCameraPickerModal } from './Modal';

interface CameraPickerProps {
  photo: string | null;
  setPhoto: React.Dispatch<React.SetStateAction<string | null>>;
}

export const NewEntryCameraPicker: React.FC<CameraPickerProps> = ({
  photo,
  setPhoto,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <Container>
      <Button onPress={() => setIsModalVisible(true)} isActive={!!photo}>
        <Icon name="photo-camera" size={30} color={Colors.white} />
      </Button>
      <NewEntryCameraPickerModal
        handleCloseModal={handleCloseModal}
        isModalVisible={isModalVisible}
        photo={photo}
        setPhoto={setPhoto}
      />
    </Container>
  );
};
