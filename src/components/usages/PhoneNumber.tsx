import { Form } from 'antd'
import React from 'react'
import CustomInput from '../CustomInput'

const PhoneNumber = () => {
  return (
    <div className='p-[1rem] w-full  border-[1.2px] border-gray-300 rounded-lg'>
        <div className='p-[1rem]'>
            <Form className='flex flex-col gap-[2rem]'
                initialValues={{mobileCode: '+234'}}
            >
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular</p>
                    <CustomInput name='mobileNumber' phoneCodeName='phoneCode' label='Mobile number' isPhoneNumber  />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular</p>
                    <CustomInput name='mobileNumber' label='Mobile number' isPhoneNumber  />
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

export default PhoneNumber