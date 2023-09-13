import { Form } from 'antd'
import React, { useState } from 'react'
import CustomInput from '../CustomInput'
import moment, { Moment } from 'moment'
import CodeDisplay from './CodeDisplay';

const codeString = `
import { Form } from 'antd'
import React from 'react'
import CustomInput from '../CustomInput'
import moment, { Moment } from 'moment'

const Datepicker = () => {
    const disableOneYear = (current: Moment) =>{
        return current > moment().subtract(1, 'years')
       }
    
    return (
        <Form initialValues={{date2 : moment('22-06-2023', "DD-MM-YYYY") }} className='flex flex-col gap-[2rem]'
        >
            <div>
                <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular:</p>
                <CustomInput name='date' label='Date' isDatePicker />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Initial value set:</p>
                <CustomInput name='date2' label='Date' isDatePicker />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Disables dates below 18 years:</p>
                <CustomInput name='date3' label='Date' isDatePicker isDob />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Disables future dates</p>
                <CustomInput name='date3' label='Date' isDatePicker futureDisabled />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Disable desired date</p>
                <CustomInput name='date3' label='Date' isDatePicker disabledDate={disableOneYear} />
            </div>
           
            <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
        </Form>
    ) 
}
  `;

const Datepicker = () => {
    const [showCode, setShowCode] = useState(false)

    const disableOneYear = (current: Moment) =>{
        return current > moment().subtract(1, 'years')
       }
    
  return (
    <div className='p-[1rem] w-full  border-[1.2px] border-gray-300 rounded-lg'>
    <div className='p-[1rem]'>
        <Form initialValues={{date2 : moment('22-06-2023', "DD-MM-YYYY") }} className='flex flex-col gap-[2rem]'
        >
            <div>
                <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular:</p>
                <CustomInput name='date' label='Date' isDatePicker />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Initial value set:</p>
                <CustomInput name='date2' label='Date' isDatePicker />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Disables dates below 18 years:</p>
                <CustomInput name='date3' label='Date' isDatePicker isDob />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Disables future dates</p>
                <CustomInput name='date3' label='Date' isDatePicker futureDisabled />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>Disable desired date</p>
                <CustomInput name='date3' label='Date' isDatePicker disabledDate={disableOneYear} />
            </div>
           
            <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
        </Form>
    </div>
    <div className='border-t-[1.2px] p-[1rem] gap-2 border-gray-300'>
        <h1 className='font-semibold mb-3'>Date picker</h1>
        <p>Used to select a date from calendar.</p>
        <p> please note that the initial value for date must be converted into a moment format</p>
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

export default Datepicker