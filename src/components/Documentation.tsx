import React from 'react'
import Regular from './usages/Regular'
import Special from './usages/Special'
import Selector from './usages/Selector'
import Datepicker from './usages/Datepicker'
import Spacecompact from './usages/Spacecompact'
import PhoneNumber from './usages/PhoneNumber'
import RadioCheck from './usages/RadioCheck'
import Subtitled from './usages/Subtitled'

interface Props{
    myRef: React.RefObject<HTMLDivElement>
}

const Documentation = ({myRef}: Props) => {
  return (
    <div ref={myRef} className='p-[1rem] flex justify-center items-center flex-col md:p-[4rem]'>
        <h1 className='text-[1.5rem] w-full text-left font-semibold mb-[2rem]'>Usage</h1>
        <div className='gap-[2rem] grid grid-cols-1 md:grid-cols-2 '>
            <div className='w-full h-auto break-inside-avoid mb-[2rem]  max-w-[38rem]'>
                <Regular/>
            </div>
            <div className='w-full h-auto break-inside-avoid mb-[2rem]  max-w-[38rem]'>
                <Special/>
            </div>
            <div className='w-full h-auto break-inside-avoid mb-[2rem] max-w-[38rem]'>
                <Selector/>
            </div>
            <div className='w-full  h-auto mb-[2rem] break-inside-avoid max-w-[38rem]'>
                <Datepicker/>
            </div>
            <div className='w-full mb-[2rem] break-inside-avoid   max-w-[38rem]'>
                <Spacecompact/>
            </div>
            <div className='w-full mb-[2rem] break-inside-avoid  max-w-[38rem]'>
                <PhoneNumber/>
            </div>
            <div className='w-full mb-[2rem] break-inside-avoid  max-w-[38rem]'>
                <RadioCheck/>
            </div>
            <div className='w-full  mb-[2rem] break-inside-avoid  max-w-[38rem]'>
                <Subtitled/>
            </div>
        </div>
    </div>
  )
}

export default Documentation