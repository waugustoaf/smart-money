import React, { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../../utils/colors';
import {
  Camera,
  CameraButton,
  CloseButton,
  ImagePreview,
  ImagePreviewCheckButton,
  ImagePreviewDeleteButton,
  ImagePreviewImage,
} from './styles';

interface ModalProps {
  isModalVisible: boolean;
  handleCloseModal: () => void;
  photo: string | null;
  setPhoto: React.Dispatch<React.SetStateAction<string | null>>;
}

export const NewEntryCameraPickerModal: React.FC<ModalProps> = ({
  isModalVisible,
  handleCloseModal,
  photo,
  setPhoto,
}) => {
  const [camera, setCamera] = useState<RNCamera | null>();

  const handleTakePicture = async () => {
    try {
      const data = await camera?.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
      });
      setPhoto(data?.uri || null);
      handleCloseModal();
    } catch (err) {
      console.log(err);
      Alert.alert(
        'Erro ao salvar imagem.',
        'Não foi possível salvar sua imagem. Por favor, verifique se nos concedeu tal permissão.',
      );
    }
  };

  const handleDeletePhoto = () => {
    setPhoto(null);
  };

  return (
    <Modal animationType="slide" transparent={false} visible={isModalVisible}>
      {!!photo ? (
        <ImagePreview source={{ uri: photo }}>
          <ImagePreviewImage>
            <ImagePreviewDeleteButton onPress={handleDeletePhoto}>
              <Icon name="delete" size={50} color={Colors.white} />
            </ImagePreviewDeleteButton>
            <ImagePreviewCheckButton onPress={handleCloseModal}>
              <Icon name="check" size={50} color={Colors.white} />
            </ImagePreviewCheckButton>
          </ImagePreviewImage>
        </ImagePreview>
      ) : (
        <Camera
          ref={ref => setCamera(ref)}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.auto}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos de sua permissão para usar a câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
          captureAudio={false}
        >
          <CameraButton onPress={handleTakePicture}>
            <Icon name="photo-camera" size={40} color={Colors.white} />
          </CameraButton>

          <CloseButton onPress={handleCloseModal}>
            <Icon name="close" size={50} color={Colors.white} />
          </CloseButton>
        </Camera>
      )}
    </Modal>
  );
};
