import React, { useState } from 'react';

const TellMeWhy = () =>
  // { care, setCare, suffer, setSuffer }
  {
    const [care, setCare] = useState(false);
    const [suffer, setSuffer] = useState(false);
    return (
      <div>
        <h1>Tell me why you gave me such a hard topic to learn?</h1>
        <h3>Because I care</h3>
        {care && <p data-testid='careTxt'>Well let me see those abs then!</p>}
        <button
          data-testid='careBtn'
          onClick={() => {
            setCare(!care);
          }}
        >
          Care Vote
        </button>
        <h3>Because I want you to suffer</h3>
        {suffer && <p>Well I still wanna see those abs!</p>}
        <button data-testid='sufferBtn' onClick={() => setSuffer(!suffer)}>
          Suffer Vote
        </button>
      </div>
    );
  };

export default TellMeWhy;
