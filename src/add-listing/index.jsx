import React, { useState } from 'react'
import Header from '../components/Header'
import carDetails from '../shared/CarDetails.json'
import InputField from './Components/InputField'
import DropdownField from './Components/DropdownField'
import TextAreaField from './Components/TextAreaField'
import { Separator } from '../components/ui/separator'
import features from '../Shared/features.json'
import { Checkbox } from "../components/ui/checkbox"
import { Button } from '../components/ui/button'
import { db } from './../../configs'
import { CarListing } from './../../configs/schema'
import UploadImages from './components/UploadImages'
import { BiLoaderAlt } from "react-icons/bi";
import moment from 'moment';
import { useNavigate } from 'react-router-dom'

function AddListing() {

    const [formData, setFormData] = useState([]);
    const [featuresData,setFeaturesData]=useState([])
    const [triggerUploadImages,setTriggerUploadImages]=useState();
    const [loader,setLoader]=useState(false);
    const navigate=useNavigate();
    const {user} = useUser();

    const handleInputChange = (name, value) => {
        setFormData((prevData)=>({
            ...prevData,
            [name]: value
        }))
        console.log(formData);
    }

    const handleFeatureChange=(name,value)=>{
        setFeaturesData((prevData)=>({
            ...prevData,
            [name]:value
        }))
        console.log(featuresData)
    }

    const onSubmit = async (e) => {
        setLoader(true)
        e.preventDefault();
        console.log(formData);
        try{
        const result = await db.insert(CarListing).values({
            ...formData,
            features:featuresData,
            creadorPor:user?.primaryEmailAddress?.emailAddress,
            publicadoPor: moment().format('DD/MM/YYYY HH:mm:ss'),
        }).returning({id:CarListing.id});     
        if(result)
        {
          console.log("Datos guardados")
          setTriggerUploadImages(result[0]?.id);
          setLoader(false);
        }
        }catch(e){
            console.log("Error",e)
        }
    }
    
  return (
    <div>
        <Header />
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Añadir un automovil</h2>
            <form className='p-10 border rounded-xl mt-10' onSubmit={onSubmit}>
                {/* Car Details */}
                <div className='font-medium text-xl mb-6'>Detalles del automovil</div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {carDetails?.features?.length > 0 ? (
                        carDetails.features.map((item, index) => (
                            <div key={index}>
                                <label className='text-sm'>
                                    {item.label} 
                                    {item.required === true && <span className='text-red-500'>*</span>}
                                </label>
                                {item.fieldType === 'text' || item.fieldType === 'number' 
                                    ?<InputField item={item} handleInputChange={handleInputChange}/> 
                                    :item.fieldType === 'dropdown' 
                                    ? <DropdownField item={item} handleInputChange={handleInputChange}/> 
                                    :item.fieldType === 'textarea' 
                                    ? <TextAreaField item={item} handleInputChange={handleInputChange}/> 
                                    : null}
                            </div>
                        ))
                    ) : (
                        <p>No hay campos configurados</p>
                    )}
                </div>
                <Separator className='my-6'/>
                {/* Features list */}
                <div>
                    <h2 className='font-medium text-xl my-6'>Caracteristicas del automovil</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3'>
                        {features.features.map((item,index)=>(
                            <div key={index} className='flex gap-2 items-center'>
                                <Checkbox 
                                    onCheckedChange={(checked) => handleFeatureChange(item.name, checked)}
                                /> <h2>{item.label}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Car Images */}
                <Separator className='my-6'/>
                <UploadImages triggleUploadImages={triggerUploadImages}
                setLoader={(v)=>{setLoader(v);navigate('/profile')}}/>
                <div className='mt-10 flex justify-end'>
                    <Button type="button" 
                    disabled={loader}
                    onClick={(e)=>onSubmit(e)}>
                        {!loader?'Submit':<BiLoaderAlt className='animate-spin text-lg' />}
                    Añadir automovil</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddListing