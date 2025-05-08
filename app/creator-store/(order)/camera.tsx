import {
  CameraView,
  CameraType,
  useCameraPermissions,
  FlashMode,
} from "expo-camera";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
  StatusBar,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [isImage, setIsImage] = useState<string | null>(null);
  const [flashMode, setFlashMode] = useState<FlashMode>("off" as FlashMode);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 1,
        skipProcessing: true,
      });
      setIsImage(photo.uri);
      setIsModalVisible(true);
    }
  };

  const handleRetakePicture = () => {
    setIsImage(null);
    setIsModalVisible(false);
  };

  const handleConfirmPicture = async () => {
    if (isImage) {
      await MediaLibrary.saveToLibraryAsync(isImage);
      setIsModalVisible(false);
      router.replace("/creator-store/orders");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <CameraView
        style={styles.camera}
        facing={facing}
        ref={cameraRef}
        flash={flashMode}>
        <View className="absolute bottom-5 w-full">
          <TouchableOpacity
            onPress={handleTakePicture}
            className="bg-[#E5FF03] rounded-sm  py-3 justify-center mx-auto w-11/12 items-center shadow-lg shadow-slate-50">
            <Text
              style={{
                fontFamily: "PPFormulaCondensed-Bold",
                fontSize: 30,
              }}
              className="text-center text-black uppercase">
              Take photo to confirm
            </Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          {isImage && (
            <Image source={{ uri: isImage }} style={styles.preview} />
          )}
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleRetakePicture}>
              <Text style={styles.text}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleConfirmPicture}>
              <Text style={styles.text}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontFamily: "HelveticaNeue-Bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  preview: {
    width: "80%",
    height: "60%",
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
  },
});
