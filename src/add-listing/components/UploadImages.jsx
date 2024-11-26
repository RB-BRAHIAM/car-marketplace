import { Button } from '@/components/ui/button'
import {storage} from './../../../configs/firebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { db } from './../../../configs';
import { CarImages } from './../../../configs/schema';

function UploadImages({triggleUploadImages,setLoader}) {

    const [selectedFileList,setSelectedFilesList]=useState([]);
    
    useEffect(()=>{
        if(triggleUploadImages)
        {
            UploadImagesToServer();
        }
    },[triggleUploadImages])

    const onFileSelected=(event)=>{
        const files=event.target.files;
        
        for(let i=0;i<files?.length;i++){
            const file=files[i];
            setSelectedFilesList((prev)=>[...prev,file])
        }
    }

    const onImageRemove=(image,index)=>{
        const result=selectedFileList.filter((item)=>item!=image);
        setSelectedFilesList(result);
    }

    const UploadImagesToServer=async()=>{
        setLoader(true)
        for (const file of selectedFileList) {
            const filename = Date.now() + '.jpeg';
            const storageRef = ref(storage, 'car-marketplace/' + filename);
            const metaData = {
                ContentType: 'image/jpeg'
            };
            try {
                const snapShot = await uploadBytes(storageRef, file, metaData);
                console.log('Uploaded File');
                const downloadUrl = await getDownloadURL(snapShot.ref);
                console.log(downloadUrl);
                await db.insert(CarImages).values({
                    imageURL:downloadUrl,
                    carListingId:triggleUploadImages
                })
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
        setLoader(false)
    }
    
  return (
    <div>
        <h2 className='font-medium text-xl my-3'>Cargar imagenes de los autos</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
            {selectedFileList.map((image,index)=>(
                <div key={index}>
                    <IoMdCloseCircle className='absolute m-2 text-lg text-white ' 
                    onClick={()=>onImageRemove(image)}
                    />
                    <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl'/>
                </div>
            ))}
            
            <label htmlFor='upload-images'>
                <div className='border rounded-xl border-dotted 
                border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
                    <h2 className='text-lg text-center'>+</h2>
                </div>
            </label>
            <input type="file" multiple={true} id='upload-images' 
            onChange={onFileSelected}
            className='opacity-0' />
        </div>
    </div>
  )
}

export default UploadImages