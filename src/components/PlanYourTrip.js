import React, { useState, useEffect } from "react";
import './PlanYourTrip.css';

import Header from './Header';

const InteractiveCard = ({ title, image, onClick, selected }) => {
    return (
      <div
        className={`planyourtrip_card ${selected ? "planyourtrip_selected" : ""}`}
        onClick={onClick}
      >
        <img src={image} alt={title} className="planypurtrip_card-image" />
        <div className="planyourtrip_card-title">{title}</div>
      </div>
    );
  };
  
  
  const SummaryView = ({ selections, onBack }) => (
    <div>
      <h2>Your Trip Summary</h2>
      <p>Traveling: {selections.companion}</p>
      <p>Duration: {selections.nights}</p>
      <p>Destination: {selections.city}</p>
      <p>Accommodation: {selections.accommodation}</p>
      <p>Activities: {selections.activities.join(", ")}</p>
      <p>Dining Preference: {selections.restaurant}</p>
    </div>
  );
  
  const PlanYourTrip = () => {
    const [step, setStep] = useState(0);
    const [showSummary, setShowSummary] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState('forward');
    const [selections, setSelections] = useState({
      companion: null,
      nights: null,
      city: null,
      accommodation: null,
      activities: [],
      restaurant: null,
    });

    useEffect(() => {
      document.body.classList.add('planyourtrip-body');

      // Cleanup when component unmounts
      return () => {
          document.body.classList.remove('planyourtrip-body');
      };
  }, []); // Empty dependency array to run once when component mounts
  
    const steps = [
      {
        question: "Who will you be travelling with?",
        options: [
          { title: "Solo", image: "/images/travelling_solo.jpg" },
          { title: "Partner", image: "/images/travelpartner.jpg" },
          { title: "Friends", image: "/images/travelfriends.jpg" },
          { title: "Family", image: "/images/travelfamily.jpg" },
        ],
        key: "companion",
        multiple: false,
      },
      {
        question: "How many nights will you stay?",
        options: [
          { title: "1 Night", image: "/images/number-1.jpg" },
          { title: "2 Nights", image: "/images/number-2.jpg" },
          { title: "3+ Nights", image: "/images/number-3.jpg" },
        ],
        key: "nights",
        multiple: false,
      },
      {
        question: "Which city/town will you be staying in?",
        options: [
          { title: "George Town", image: "/images/george-town.jpg" },
          { title: "Butterworth", image: "/images/butterworth.jpg" },
          { title: "Perai", image: "/images/seberang-perai.jpg" },
        ],
        key: "city",
        multiple: false,
      },
      {
        question: "What type of accommodation would you like?",
        options: [
          { title: "High-End Hotel", image: "/images/high-end-hotel.jpg" },
          { title: "Shared Accommodation", image: "/images/shared-accom.jpg" },
          { title: "Motel", image: "/images/motel.jpg" },
          { title: "Flat", image: "/images/flats-house.jpg" },
        ],
        key: "accommodation",
        multiple: false,
      },
      {
        question: "Select three activities you are interested in:",
        options: [
          { title: "Museums", image: "/images/mzng.jpg" },
          { title: "Theme Parks", image: "/images/thmprk.jpg" },
          { title: "Art Galleries", image: "/images/art-gall.jpg" },
          { title: "Parks", image: "/images/prks.jpg" },
        ],
        key: "activities",
        multiple: true,
      },
      {
        question: "What type of restaurant would you like?",
        options: [
          { title: "Buffet-Style", image: "/images/buffet.jpg" },
          { title: "Formal Dining", image: "/images/formal-dining.jpg" },
          { title: "Family", image: "/images/family-dining.jpg" },
          { title: "Fast Food", image: "/images/fast-food.jpg" },
          { title: "Traditional", image: "/images/trad-food.jpg" },
        ],
        key: "restaurant",
        multiple: false,
      },
    ];
  
    const handleSelection = (key, option, multiple) => {
      setSelections((prev) => {
        if (multiple) {
          const currentSelections = prev[key] || [];
          let updated;
          
          if (currentSelections.includes(option)) {
            updated = currentSelections.filter(item => item !== option);
          } else if (currentSelections.length < 3) {
            updated = [...currentSelections, option];
          } else {
            return prev;
          }
  
          const newSelections = { ...prev, [key]: updated };
  
          // Check if we should transition after updating
          if (updated.length === 3 && key === 'activities') {
            setTimeout(() => {
              if (step < steps.length - 1) {
                setDirection('forward');
                setIsTransitioning(true);
              }
            }, 300);
          }
  
          return newSelections;
        } else {
          const newSelections = { ...prev, [key]: option };
          
          // Handle transition for non-multiple selections
          if (step < steps.length - 1) {
            setDirection('forward');
            setIsTransitioning(true);
          }
          
          return newSelections;
        }
      });
    };
  
    useEffect(() => {
      let timer;
      if (isTransitioning) {
        timer = setTimeout(() => {
          setStep((prevStep) => {
            const nextStep = direction === 'forward' 
              ? Math.min(prevStep + 1, steps.length - 1)
              : Math.max(prevStep - 1, 0);
            return nextStep;
          });
          setIsTransitioning(false);
        }, 500);
      }
      return () => {
        if (timer) clearTimeout(timer);
      };
    }, [isTransitioning, direction, steps.length]);
  
  
    const prevStep = () => {
      if (step > 0) {
        setDirection('back');
        setIsTransitioning(true);
      }
    };
  
    const startOver = () => {
      setStep(0);
      setSelections({
        companion: null,
        nights: null,
        city: null,
        accommodation: null,
        activities: [],
        restaurant: null,
      });
      setShowSummary(false);
    };
  
    const currentStep = steps[step];
  
    const isRestaurantSelected = selections.restaurant !== null;
  
    return (
      <div className="app">
        <Header />
        {showSummary ? (
          <SummaryView selections={selections} onBack={() => setShowSummary(false)} />
        ) : (
          <div className={`planyourtrip_content-wrapper ${isTransitioning ? "planyourtrip_fade-out" : "planyourtrip_fade-in"}`}>
            <div className="question">{currentStep.question}</div>
            <div className="planyourtrip_cards-container">
              {currentStep.options.map((option) => (
                <InteractiveCard
                
                  key={option.title}
                  title={option.title}
                  image={option.image}
                  onClick={() =>
                    handleSelection(currentStep.key, option.title, currentStep.multiple)
                   
                  }
                  selected={
                    currentStep.multiple
                      ? selections[currentStep.key]?.includes(option.title)
                      : selections[currentStep.key] === option.title
                  }
                />
              ))}
            </div>
            <div className="navigation">
              {step > 0 && <button onClick={prevStep}>Back</button>}
              {step === steps.length - 1 && isRestaurantSelected && (<button onClick={() => setShowSummary(true)}>See Summary</button>)}
            </div>
          </div>
        )}
        {showSummary && (
          <button onClick={startOver}>Start Over</button>
        )}
      </div>
    );
  };
  
  
  export default PlanYourTrip;