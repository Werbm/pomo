import { useState } from 'react';
import FirstImage from '../assets/first-apresentation-img.png';
import SecondImage from '../assets/second-apresentation-img.png';
import ThirdImage from '../assets/third-apresentation-img.png';



export const Data = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSelected, setIsSelected] = useState(false);


    const stepsData = [
        {
             title: 'Pomo',
             description: 'Easy task & work management with pomo',
             imgUrl: FirstImage
        },
        {
            title: 'Pomo',
            description: 'Track your producitvity & gain insights',
            imgUrl: SecondImage
        },
        {
            title: 'Pomo',
            description: 'Boost your productivity now & be successful',
            imgUrl: ThirdImage
        }
    ]

    const handleSetCurrentStep = (index: number) => {
        setCurrentStep(index)

    }

  return (
    <>
    <section className="w-full h-screen flex flex-col justify-center items-center gap-5">
        <section className='w-96'>
            <img src={stepsData[currentStep].imgUrl} alt="Marking Tasks Done" />
        </section>
        <section>
            <span className='text-4xl font-black flex items-center text-center'>
                {stepsData[currentStep].description}
                </span>
        </section>
        <section className="flex justify-center items-center p-4 gap-3">
            {for (let i = 0; i === 3; i++) {
                
            }}
        </section>
        <button className='primary-button'>
            <span className='text-white'>Next</span>
        </button>

    </section>
    </>
  )
}
