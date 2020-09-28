import { storage } from '../../firebase/configure';

const handleFireBaseUpload = async (image) => {
  // Create the file metadata
  const metadata = {
    contentType: 'image/jpeg',
  };
  const uploadTask = storage.ref(`/images/${image.name}`).put(image, metadata);
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function(snapshot) {
      switch (snapshot.state) {
        case storage.TaskState.PAUSED: // or 'paused'
          break;
        case storage.TaskState.RUNNING: // or 'running'
          break;
        default:
          break;
      }
    },
    function(error) {
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
        default:
          break;
      }
    },
    function() {
      // Upload completed successfully, now we can get the download URL

      const imageURL = uploadTask.snapshot.ref
        .getDownloadURL()
        .then((downloadURL) => downloadURL);
      return imageURL;
    },
  );
};

export default handleFireBaseUpload;
