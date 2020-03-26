'use strict';
/* Take pictures and navigate to the upload processing page with the relevant parameters to enable this screen to determine which Azure Connection API to call. */
async function takePictureMake(navigation, camera) {
  if (camera) {
    await camera
      .takePictureAsync({
        quality: 0.9,
        base64: true,
      })
      .then(data => {
        navigation.navigate('UploadProcessing', {
          dataPass: data.base64,
          mode: 'Make',
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

async function takePictureModel(navigation, vehicleMake, camera) {
  if (camera) {
    await camera
      .takePictureAsync({
        quality: 0.9,
        base64: true,
      })
      .then(data => {
        navigation.navigate('UploadProcessing', {
          dataPass: data.base64,
          vehicleMake: vehicleMake,
          mode: 'Model',
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default {
  takePictureMake,
  takePictureModel,
};
