import { Form } from 'antd'
import React, { useState } from 'react'
import CustomInput from '../CustomInput'
import CodeDisplay from './CodeDisplay';


const codeString = `
import { Form } from 'antd'
import React, { useState } from 'react'
import CustomInput from '../CustomInput'

const Regular = () => {
    return (
        <Form className='flex flex-col gap-[2rem]'
                initialValues={{regular3: 'initial value'}}
            >
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular:</p>
                    <CustomInput name='regular' label='Name' />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Required:</p>
                    <CustomInput name='regular2' label='Name' required />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Initial value should be passed with "Form" tag:</p>
                    <CustomInput name='regular3' label='Name' required />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Disabled / Non-editable</p>
                    <CustomInput name='regular3' label='Name' nonEditable required />
                </div>
                
                <button type='submit' 
                className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
            </Form>
    ) 
}
  `;


const Regular = () => {
   const [showCode, setShowCode] = useState(false)
  return (
    <div className='p-[1rem] w-full  border-[1.2px] border-gray-300 rounded-lg'>
        <div className='p-[1rem]'>
            <Form className='flex flex-col gap-[2rem]'
                initialValues={{regular3: 'initial value'}}
            >
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular:</p>
                    <CustomInput name='regular' label='Name' />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Required:</p>
                    <CustomInput name='regular2' label='Name' required />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Initial value should be passed with "Form" tag:</p>
                    <CustomInput name='regular3' label='Name' required />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Disabled / Non-editable</p>
                    <CustomInput name='regular3' label='Name' nonEditable required />
                </div>
                
                <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
            </Form>
        </div>
        <div className='border-t-[1.2px] p-[1rem] border-gray-300'>
            <h1 className='font-semibold mb-3'>Basic</h1>
            <p>Basic usage of custom input</p>
        </div>
        <div onClick={()=> setShowCode((prev)=> !prev)} className='text-blue-500 w-full text-center cursor-pointer'>{showCode? 'Hide code': `Show code`}</div>
        {showCode &&
            <div className='codeParent'>
                <CodeDisplay code={codeString} />
             </div>
    }
    </div>
  )
}

export default Regular