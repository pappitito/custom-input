import React from 'react'
import CustomInput from './CustomInput'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Form } from 'antd';

const options: DropdownProps[] = [
    {title:'Option 1', value: 'option 1'},
    {title:'Option 2', value: 'option 2'},
    {title:'Option 3', value: 'option 3'},
]
const images = [
    `/images/carousel/customOne.png`,
    `/images/carousel/customTwo.png`,
    `/images/carousel/customThree.png`,
    `/images/carousel/customFour.png`,
    `/images/carousel/customFive.png`,
    `/images/carousel/customSix.png`,
    `/images/carousel/customSeven.png`,
    `/images/carousel/CustomEight.png`,
    `/images/carousel/customNine.png`,
    
]
interface Prop {
    btnClick: ()=> void;
}
const HomePage = ({btnClick}: Prop) => {

  return (
    <div className='w-full h-screen justify-center flex items-center flex-col'>
        <div className='flex flex-col items-center '>
        <h1 className='m-auto w-full text-[1.5rem] xs:text-[2rem] sm:text-[2.3rem] md:text-[4.3rem]  text-blue-500  text-center font-bold'>{`<`} <span className=' text-[2rem] text-gray-500 xs:text-[2.5rem] sm:text-[3.7rem] md:text-[4.7rem] lg:text-[6.7rem] '>CustomInput</span> {`/>`} 
        <span className='text-blue-500 '>  .</span></h1>
        <p className='text-[1.2rem] md:text-[2rem] font-medium text-gray-500'>{`Developer's Guide`}</p>
        
            <Carousel className='mt-[4rem] max-w-[50rem] p-2  md:mt-0 min-w-[22rem]' showArrows={false} showIndicators={false} autoPlay={true} interval={2500} showThumbs={false} infiniteLoop={true}   >
                {images.map((item)=> <div key={item}><img key={item} className='max-w-[35rem] w-[full] min-w-[]'  src={item} alt={item} /></div>)}
            </Carousel> 
        
       
           
            
            <button onClick={()=> btnClick()} className='w-[9rem]  z-10 p-[0.6rem] md:p-[0.8rem] text-center rounded-md mt-3 bg-blue-500 text-white'>Proceed</button>
        </div>
        
    </div>
  )
}

export default HomePage