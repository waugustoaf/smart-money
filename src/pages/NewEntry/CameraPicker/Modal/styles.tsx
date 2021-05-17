import { RNCamera } from "react-native-camera";
import styled from "styled-components/native";

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const CameraButton = styled.TouchableOpacity`
  flex: 0;
  align-self: center;
  position: absolute;
  bottom: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  flex: 0;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ImagePreview = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const ImagePreviewImage = styled.View`
  flex: 9;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 16px;
`;

export const ImagePreviewDeleteButton = styled.TouchableOpacity``;

export const ImagePreviewCheckButton = styled.TouchableOpacity``;
