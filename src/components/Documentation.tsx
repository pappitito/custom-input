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
        <div className='grid grid-cols-1 md:grid-cols-2 auto-rows-auto grid-flow-dense  justify-center  gap-[3rem] '>
            <div className='w-full   max-w-[38rem]'>
                <Regular/>
            </div>
            <div className='w-full   max-w-[38rem]'>
                <Special/>
            </div>
            <div className='w-full   max-w-[38rem]'>
                <Selector/>
            </div>
            <div className='w-full md:mt-[-15rem]   max-w-[38rem]'>
                <Datepicker/>
            </div>
            <div className='w-full md:mt-[-7rem]   max-w-[38rem]'>
                <Spacecompact/>
            </div>
            <div className='w-full   max-w-[38rem]'>
                <PhoneNumber/>
            </div>
            <div className='w-full   max-w-[38rem]'>
                <RadioCheck/>
            </div>
            <div className='w-full   max-w-[38rem]'>
                <Subtitled/>
            </div>
        </div>
    </div>
  )
}

export default Documentation