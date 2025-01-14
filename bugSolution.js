```javascript
import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';

const BugSolution = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraTypeSwitch = () => {
      setType(
        type === CameraType.back ? CameraType.front : CameraType.back
      );
  };

  if (hasPermission === null) {
    return <View><Text>Requesting camera permissions...</Text></View>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        {/* add error handling here */}
        <Button title={`Switch Camera`} onPress={handleCameraTypeSwitch} />
      </Camera>
    </View>
  );
};

export default BugSolution;
```