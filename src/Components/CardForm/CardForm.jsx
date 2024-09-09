import  { useState } from 'react';

const CardForm = () => {
  const [isBackCardVisible, setIsBackCardVisible] = useState(false);

  const toggleBackCard = () => {
    setIsBackCardVisible(!isBackCardVisible);
  };

  const hideBackCard = () => {
    setIsBackCardVisible(false);
  };

  const revealBackCard = () => {
    setIsBackCardVisible(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
      <form className="bg-white w-full max-w-3xl mx-auto px-4 lg:px-6 py-8 shadow-md rounded-md flex flex-col lg:flex-row">
        {/* Rest of the form elements */}
      </form>
      <div className="w-full max-w-sm h-56" style={{ perspective: '1000px' }}>
        <div
          id="creditCard"
          className={`relative crediCard cursor-pointer transition-transform duration-500 ${
            isBackCardVisible ? 'seeBack' : ''
          }`}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={toggleBackCard}
        >
          {/* Back of the card */}
          <div
            className="w-full h-56 m-auto rounded-xl text-white shadow-2xl absolute"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            {/* Rest of the back card content */}
          </div>
          {/* Front of the card */}
          <div
            className="w-full h-56 m-auto rounded-xl text-white shadow-2xl absolute"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Rest of the front card content */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardForm;
