import { Form } from 'antd'
import React from 'react'
import CustomInput from '../CustomInput'

const Subtitled = () => {
  return (
    <div className='p-[1rem] w-full  border-[1.2px] border-gray-300 rounded-lg'>
        <div className='p-[1rem]'>
            <Form className='flex flex-col gap-[2rem]'
                initialValues={{regular3: 'initial value'}}
            >
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular:</p>
                    <CustomInput name='regular' subtitle='This is an informative subtitle' label='Name' />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>with info icon inverted:</p>
                    <CustomInput name='regular2' label='Are you IDP' subtitle='What is IDP' subtitleInvert required />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>subtitle with an onClick function and styling:</p>
                    <CustomInput name='regular3' isSelector className='text-blue-500 font-medium italic' subtitle='Change' noSubIcon subtitleOnClick={()=> console.log('Hello world')} label='Business type' required />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Disabled / Non-editable but with unique text</p>
                    <CustomInput name='regular' isSelector label='State' nonEditable nonEditableText='Select a country first' required />
                </div>
                <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
            </Form>
        </div>
        <div className='border-t-[1.2px] p-[1rem] border-gray-300'>
            <h1 className='font-semibold mb-3'>Basic</h1>
            <p>Basic usage of custom input</p>
        </div>
    </div>
  )
}

export default Subtitled