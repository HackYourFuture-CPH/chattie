import React from 'react';
import firebase from './firebase'

function handleImageUpload(image){
const handleSave = () =>{
    const bucketName = 'images';

    const storageRef = firebase.storage().ref(`${bucketName}/${image}`)
    const uploadTask = storageRef.put(image)
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
       () => {
           const { downloadURL } = uploadTask.snapshot
           return downloadURL
       })
      
   }
   return(
    <button type="button" onClick ={handleSave}>Save </button>
) 
   
}

export default handleImageUpload;