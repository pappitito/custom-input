import { Form } from 'antd'
import React, { useState } from 'react'
import CustomInput from '../CustomInput'
import CodeDisplay from './CodeDisplay';


const codeString = `
import { Form } from 'antd'
import React from 'react'
import CustomInput from '../CustomInput'



const PhoneNumber = () => {
    return (
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
    ) 
}
  `;

const PhoneNumber = () => {
    const [showCode, setShowCode] = useState(false)
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
                    <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>with initial value</p>
                    <CustomInput name='mobileNumber' label='Mobile number' isPhoneNumber  />
                </div>
                
                <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
            </Form>
        </div>
        <div className='border-t-[1.2px] p-[1rem] border-gray-300'>
            <h1 className='font-semibold mb-3'>Phone Number</h1>
            <p> usage of custom input for phone numbers</p>
        </div>
        <div onClick={()=> setShowCode((prev)=> !prev)} className='text-blue-500 w-full text-center cursor-pointer'>{showCode? 'Hide code': 'Show code'}</div>
        {showCode &&
            <div className='codeParent'>
                <CodeDisplay code={codeString} />
             </div>
    }
    </div>
  )
}

export default PhoneNumber