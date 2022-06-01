import React,{ useState } from 'react'
import style from "./Uploading.module.css"
import Axios from "axios"
import { CloudinaryContext, Image } from 'cloudinary-react'



function Uploading() {


const [previewSource,setPreviewSource]= useState("")
const [fileInputState,setFileInputState]= useState("")
const [selectedFile,setSelectedFile]= useState("")



const handleFileInputChange =(e)=> {
        const file =e.target.files[0];
        previewFile(file);
}

const previewFile = (file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
        setPreviewSource(reader.result);
}
}

const handleSubmitFile=(e)=>{
    e.preventDefault();
    if(!previewSource)return;
uploadImages(previewSource);
}

const uploadImages= async (base64EncodeImage)=> {
console.log(base64EncodeImage);
try {
    await Axios.post("/api/upload",{
      data: JSON.stringify({base64EncodeImage})
    })
} catch (error) {
    console.log(error)
}
}


const [imageSelected,setImageSelected]= useState("")



const uploadImage=()=>{
  const formData= new FormData();
  formData.append("file",imageSelected)
  formData.append("upload_preset","api-img")

  // Axios.post("https://api.cloudinary.com/v1_1/yachtimeapp/image/upload",formData).then((response)=>{console.log(response)})
  console.log(imageSelected.file)
}













  return (
    <div className={style.uploadingContainer}>
        <h1>Upload</h1>
        <form onSubmit={handleSubmitFile} >
            <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} className="uploagind-input"  />
            <button  className="btn" type="submit" >Submit</button>
        </form>
        <div>
          <h2>New Upload </h2>
          <input type="file" onChange={(event)=>{setImageSelected(event.target.files[0])}}  />
          <button onClick={uploadImage}>Upload image</button>
        </div>
        <div>
        {previewSource && (
          <img src={previewSource} alt="chosen"  style={{height:"20%",width:"auto"}} />
          )}
          </div>
        
        
    </div>
  )
}

export default Uploading