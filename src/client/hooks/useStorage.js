import { useState, useEffect } from 'react';

import { storage } from '../firebase/configure';

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // runs every time the file value changes
  useEffect(() => {
    if (file) {
      // storage ref
      const storageRef = storage.ref(file.name);

      storageRef.put(file).on(
        'state_changed',
        (snapshot) => {
          // track the upload progress
          const percentage = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          // get the public download img url
          const downloadUrl = await storageRef.getDownloadURL();

          // save the url to local state
          setUrl(downloadUrl);
        },
      );
    }
  }, [file]);

  return { progress, url, error };
};
