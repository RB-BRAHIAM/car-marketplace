import React, { useEffect, useState } from 'react'
import { db } from '../../../configs'
import { CarImages, CarListing } from '../../../configs/schema'
import { useUser } from '@clerk/clerk-react'
import {desc,eq} from 'drizzle-orm'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import CarItem from '@/components/CarItem'
import { FaTrashCan } from "react-icons/fa6"


function myListing() {

    const {user}=useUser();
    const [carList, setCarList]=useState([]);
    useEffect(()=>{
        user&&GetUserCarListing();
    },[user])
    const GetUserCarListing=async()=>{
        const result=await db.select().from(CarListing)
        .leftJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
        .where(eq(CarListing.createBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(CarListing.id))

        const resp=Service.FormatResult(result)
        console.log(resp);
        setCarList(resp)
    }

    return (
    <div className="mt-6">
        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-4xl'>My Listing</h2>
            <Link to={'/add-listing'}>
                <Button className="ml-auto">+ Add New Listing</Button>
            </Link>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5'>
            {carList.map((item,index)=>(
                <div key={index}>
                    <CarItem car={item} />
                    <div className='p-2 bg-gray-50 rounded-lg flex justify-between'>
                        <Button variant="outline" className='w-full'>Editar</Button>
                        <Button><FaTrashCan/></Button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}
export default myListing