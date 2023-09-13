import { Form } from 'antd'
import React, { useState } from 'react'
import CustomInput from '../CustomInput'
import CodeDisplay from './CodeDisplay';

const codeString = `
import { Form } from 'antd'
import React from 'react'
import CustomInput from '../CustomInput'


const SpaceCompact = () => {
    return (
        <Form initialValues={{number: '17', street: 'Johnson drive'}} className='flex flex-col gap-[2rem]'
        >
            <div>
                <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Two labels:</p>
                <CustomInput
                
                isCombined
                combinedNames={['n', 's']}
                combinedLabels={['No', 'Street']}
            />
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>One label and two placeholders:</p>
                <CustomInput
                required
                isCombined
                combinedNames={['no', 'gate']}
                combinedLabels={['Address']}
                combinedPlaceholders={['No', 'Street']}
            />  
            </div>
            <div>
                <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>with Initial values:</p>
                <CustomInput
                required
                isCombined
                combinedNames={['number', 'street']}
                combinedLabels={['Address']}
            />  
            </div>
           
            <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
        </Form>
    ) 
}
  `;

const Spacecompact = () => {
    const [showCode, setShowCode] = useState(false)

  return (
    <div className='p-[1rem] w-full  border-[1.2px] border-gray-300 rounded-lg'>
        <div className='p-[1rem]'>
            <Form initialValues={{number: '17', street: 'Johnson drive'}} className='flex flex-col gap-[2rem]'
            >
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium text-gray-500'>Two labels:</p>
                    <CustomInput
                    
                    isCombined
                    combinedNames={['n', 's']}
                    combinedLabels={['No', 'Street']}
                />
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>One label and two placeholders:</p>
                    <CustomInput
                    required
                    isCombined
                    combinedNames={['no', 'gate']}
                    combinedLabels={['Address']}
                    combinedPlaceholders={['No', 'Street']}
                />  
                </div>
                <div>
                    <p className='mb-4 text-[0.73rem] font-medium  text-gray-500'>with Initial values:</p>
                    <CustomInput
                    required
                    isCombined
                    combinedNames={['number', 'street']}
                    combinedLabels={['Address']}
                />  
                </div>
               
                <button type='submit' className='w-[6rem] m-auto  z-10 p-[0.4rem] text-[0.85rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Submit</button>
            </Form>
        </div>
        <div className='border-t-[1.2px] p-[1rem] border-gray-300'>
            <h1 className='font-semibold mb-3'>Space compacted</h1>
            <p>use for addresses.</p>
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

export default Spacecompact