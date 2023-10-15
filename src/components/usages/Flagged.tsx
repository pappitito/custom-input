import { Form } from 'antd'
import React, { useState } from 'react'
import CustomInput from '../CustomInput'
import CodeDisplay from './CodeDisplay';
import { countryCodes } from 'utils/appData/countryCodes';
import FlaggedDropdown from '../FlaggedDropdown';


const codeString = `
import { Form } from 'antd'
import React from 'react'
import CustomInput from '../CustomInput'
import { countryCodes } from 'utils/appData/countryCodes';
import FlaggedDropdown from '../FlaggedDropdown';

const Flagged = () => {
    const [showCode, setShowCode] = useState(false)
    const options: DropdownProps[] = countryCodes.map((item)=>{
        return {
            Id: item.code ,
            title: item.name,
            value: item.name,
        }
    })
    const options2: DropdownProps[] = [
         {
            Id: 'US' ,
            title: 'USD wallet',
            value: 'USD',
            balance: '$1,023'
        },
        {
            Id: 'GB' ,
            title: 'GBP wallet',
            value: 'GBP',
            balance: '$123'
        },
        {
            Id: 'EU' ,
            title: 'EUR wallet',
            value: 'EUR',
            balance: '$10'
        },
        {
            Id: 'NG' ,
            title: 'NGN wallet',
            value: 'NGN',
            balance: 'N50,000'
        },
    ]

  return (
    <div className='p-[1rem] w-full  border-[1.2px] border-gray-300 rounded-lg'>
    <div className='p-[1rem]'>
        <Form className='flex flex-col gap-[2rem]'
        >
            <div>
                <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular:</p>
                <FlaggedDropdown
                    name='country1'
                    options={options}
                    required
                 />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>with balance / wallet usage:</p>
                <FlaggedDropdown
                    name='country2'
                    options={options2}
                    required
                 />
\            </div>
            
            
            <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
        </Form>
    </div>
    <div className='border-t-[1.2px] p-[1rem] border-gray-300'>
        <h1 className='font-semibold mb-3'>Flagged dropdowns</h1>
        <p>Dropdown selector displayed with corresponding flags</p>
    </div>
    
</div>
  )
}

  `;


const Flagged = () => {
    const [showCode, setShowCode] = useState(false)
    const options: DropdownProps[] = countryCodes.map((item)=>{
        return {
            Id: item.code ,
            title: item.name,
            value: item.name,
        }
    })
    const options2: DropdownProps[] = [
         {
            Id: 'US' ,
            title: 'USD wallet',
            value: 'USD',
            balance: '$1,023'
        },
        {
            Id: 'GB' ,
            title: 'GBP wallet',
            value: 'GBP',
            balance: '$123'
        },
        {
            Id: 'EU' ,
            title: 'EUR wallet',
            value: 'EUR',
            balance: '$10'
        },
        {
            Id: 'NG' ,
            title: 'NGN wallet',
            value: 'NGN',
            balance: 'N50,000'
        },
    ]

  return (
    <div className='p-[1rem] w-full  border-[1.2px] border-gray-300 rounded-lg'>
    <div className='p-[1rem]'>
        <Form className='flex flex-col gap-[2rem]'
        >
            <div>
                <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Regular:</p>
                <FlaggedDropdown
                    name='country1'
                    label='country'
                    options={options}
                    required
                 />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>with balance / wallet usage:</p>
                <FlaggedDropdown
                    name='country2'
                    label='Wallet'
                    options={options2}
                    noShowBalance
                    squaredFlags
                    required
                 />
           </div>
            
            
            <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
        </Form>
    </div>
    <div className='border-t-[1.2px] p-[1rem] border-gray-300'>
        <h1 className='font-semibold mb-3'>Flagged dropdowns</h1>
        <p>Dropdown selector displayed with corresponding flags</p>
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

export default Flagged