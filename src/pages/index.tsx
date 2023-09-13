import Documentation from '@/components/Documentation';
import HomePage from '@/components/Home'
import Head from 'next/head'
import React from 'react';


export default function Home() {
  const firstPageRef = React.useRef(null)

  function smoothScrollTo(ref: React.RefObject<HTMLElement>, duration: number) {
    if (!ref.current){
      console.log('entered');
      return;

    } 
    
    
    const targetPosition = ref.current.getBoundingClientRect().top+ window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    var startTime: any = null;
  
    function animation(currentTime: any) {
      if (startTime === null) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const scrollPosition = easeInOut(elapsedTime, startPosition, distance, duration);
      window.scrollTo(0, scrollPosition);
      if (elapsedTime < duration) requestAnimationFrame(animation);
    }
  
    function easeInOut(t: any, b: any, c: any, d: any) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  const handleClick = () => {
    smoothScrollTo(firstPageRef, 500);
  };


  return (
    <>
      <Head>
        <title>custom input</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
        
      </Head>
      <HomePage btnClick={()=> handleClick()}/>
      <Documentation myRef={firstPageRef} />
      
    </>
  )
}
