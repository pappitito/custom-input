import { Form } from 'antd'
import React, { useState } from 'react'
import CustomInput from '../CustomInput'
import CodeDisplay from './CodeDisplay';

const codeString = `
import { Form } from 'antd'
import React from 'react'
import CustomInput from '../CustomInput'

const options : DropdownProps[] = [
    {title: 'option 1', value :'one'},
    {title: 'option 2', value :'two'},
    {title: 'option 3', value :'three'},
]

const RadioCheck = () => {
    return (
        <Form initialValues={{option2: 'two'}} className='flex flex-col gap-[2rem]'
        >
            <div>
                <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular Radio:</p>
                <CustomInput name='options' required label='Option' isRadio options={options} />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Initial value set:</p>
                <CustomInput name='option2' isRadio options={options} />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'></p>
                <CustomInput name='option2' isSingleCheckBox required label='Has this been of any help to you at all?' />
            </div>

           
            <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
        </Form>
    ) 
}
  `;

const options : DropdownProps[] = [
    {title: 'option 1', value :'one'},
    {title: 'option 2', value :'two'},
    {title: 'option 3', value :'three'},
]

const RadioCheck = () => {
    const [showCode, setShowCode] = useState(false)

  return (
    <div className='p-[1rem] w-full  border-[1.2px] border-gray-300 rounded-lg'>
    <div className='p-[1rem]'>
        <Form initialValues={{option2: 'two'}} className='flex flex-col gap-[2rem]'
        >
            <div>
                <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular Radio:</p>
                <CustomInput name='options' required label='Option' isRadio options={options} />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Initial value set:</p>
                <CustomInput name='option2' isRadio options={options} />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'></p>
                <CustomInput name='option2' isSingleCheckBox required label='Has this been of any help to you at all?' />
            </div>

           
            <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
        </Form>
    </div>
    <div className='border-t-[1.2px] p-[1rem] border-gray-300'>
        <h1 className='font-semibold mb-3'>Radio buttons</h1>
        <p>For selecting an option out of multiple options.  by default, all dropdowns have been set to be searchable.</p>
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

export default RadioCheck