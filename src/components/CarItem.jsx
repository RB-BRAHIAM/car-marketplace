import React from 'react'
import { Separator } from './ui/separator';
import { LuFuel } from "react-icons/lu";
import { TbBrandSpeedtest } from "react-icons/tb";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineOpenInNew } from "react-icons/md";

function CarItem({car}) {
    return (
        <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
            <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>Nuevo</h2>
            <img src={car?.images[0]?.imageUrl} width={'100%'} height={250} 
            className='rounded-t-xl h-[180px] object-cover'
            />
            <div className='p-4'>
                <h2 className='font-bold text-black text-lg mb-2'>{car?.name}</h2>
                <Separator />
                <div className='grid grid-cols-3 mt-5'>
                    <div className='flex flex-col items-center'>
                        <LuFuel className='text-lg mb-2' />
                        <h2>{car?.kilometraje}</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <TbBrandSpeedtest className='text-lg mb-2' />
                        <h2>{car?.tipo_combustible} </h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiGearStickPattern className='text-lg mb-2' />
                        <h2>{car?.tipo_carroceria} </h2>
                    </div>
                </div>
                <Separator className='my-2' />
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-xl'>${car.price}</h2>
                    <h2 className='text-primary text-sm flex gap-2 items-center'>
                        Detalles <MdOutlineOpenInNew />
                    </h2>
                </div>
            </div>
        </div>
    )
}
export default CarItem