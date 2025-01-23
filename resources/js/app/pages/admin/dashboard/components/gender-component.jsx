import React from 'react'
import { FaPersonHalfDress } from "react-icons/fa6";

export default function GenderComponent() {
  return (
    <div className='sm:col-span-2'>
        <div className='bg-gray-200/20 shadow-md p-4 gap-4'>
        <div className='flex flex-row'>
        <FaPersonHalfDress className='size-6 text-green-500 mr-2'/>
        Gender
        </div>
        </div>
    </div>
  )
}
