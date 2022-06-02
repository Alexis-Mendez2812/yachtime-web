import React, { useState } from 'react';
import style from './Uploading.module.css';
import axios from 'axios';
import { CloudinaryContext, Image } from 'cloudinary-react';

function Uploading() {
   const [previewSource, setPreviewSource] = useState('');
   const [fileInputState, setFileInputState] = useState('');
   const [selectedFile, setSelectedFile] = useState('');

   const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      previewFile(file);
   };

   const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
         setPreviewSource(reader.result);
      };
   };

   const handleSubmitFile = (e) => {
      e.preventDefault();
      if (!previewSource) return;
      uploadImage(previewSource);
   };

   const uploadImage = async (base64EncodeImage) => {
      console.log(base64EncodeImage);
      try {
         await axios.post('/api/upload', {
            data: JSON.stringify({ data: base64EncodeImage }),
         });
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className={style.uploadingContainer}>
         <h1>Upload</h1>
         <form onSubmit={handleSubmitFile}>
            <input
               type='file'
               name='image'
               onChange={handleFileInputChange}
               value={fileInputState}
               className='uploagind-input'
            />
            <button className='btn' type='submit'></button>
         </form>
         <div>
            {previewSource && (
               <img
                  src={previewSource}
                  alt='chosen'
                  style={{ height: '20%', width: 'auto' }}
               />
            )}
         </div>
      </div>
   );
}

export default Uploading;
