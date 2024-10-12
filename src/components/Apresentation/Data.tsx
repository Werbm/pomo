import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import stepsData from "./Arrays/stepsData";
import { useNavigate } from "react-router-dom";


export const Data = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentButton, setCurrentButton] = useState(0);
  const navigate = useNavigate();

  const handleSetCurrentStep = (index: number) => {
    setCurrentStep(index);
  };

  const handleNextButton = () => {
    const nextButton: number = currentStep + 1;
    setCurrentButton(nextButton);
    handleSetCurrentStep(nextButton);

    if (nextButton === 3) {
      navigate('/login')
    }
  };

  const handleReturnArrow = () => {
    const nextButton: number = currentStep - 1;
    setCurrentButton(nextButton)
    handleSetCurrentStep(nextButton)
  }

  return (
    <>
    {currentButton >= 1 ? <FontAwesomeIcon className="w-10 h-10 absolute top-4 md:top-20 md:left-8 left-4 z-10 hover:text-primary cursor-pointer transition animate-fade-left" onClick={handleReturnArrow} icon={faArrowLeft} /> : ''}
    
      <section className="w-full h-screen flex flex-col justify-center items-center gap-5">
        <section className="w-96 h-80">
          <img
            className="animate-fade-left"
            src={stepsData[currentStep].imgUrl}
            alt="Marking Tasks Done"
          />
        </section>
        <section>
          <span className="text-4xl md:text-2xl md:font-normal font-black flex items-center text-center">
            {stepsData[currentStep].description}
          </span>
        </section>
        <section className="flex justify-center items-center p-4 gap-3">
          {stepsData.map((btn, index) => {
            return (
              <button
              key={btn.title}
                onClick={() => {
                  handleSetCurrentStep(index);
                  setCurrentButton(index);
                }}
              >
                <div
                  className={currentButton === index ? "elipse" : "circle"}
                ></div>
              </button>
            );
          })}
        </section>

        <button onClick={handleNextButton} className="primary-button">
          <span className="text-white">
            {currentButton === 2 ? "Get Started" : "Next"}
          </span>
        </button>
      </section>
    </>
  );
};
