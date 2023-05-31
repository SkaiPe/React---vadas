// Parašykite programą kuri turės input elementą, kuriame įrašant tekstąreaguos į aplikacijos foną.
// •Jeiguįrašy<mažiau nei 3 simboliaifonas baltas
// •Jeiguįrašy<daugiaunei 3 simboliaifonas geltonas
// •Jeiguįrašy<daugiaunei 6simboliaifonas žalias•Jeiguįrašy<daugiaunei 9simboliaifonas raudonas

import React, { useState } from 'react';

function BackgroundChanger() {
  const [inputValue, setInputValue] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputValue(text);

    if (text.length < 3) {
      setBackgroundColor('white');
    } else if (text.length < 6) {
      setBackgroundColor('yellow');
    } else if (text.length < 9) {
      setBackgroundColor('green');
    } else {
      setBackgroundColor('red');
    }
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}>
      <h2>Keisti fono spalvą</h2>
      <label>
        Įrašykite tekstą:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
    </div>
  );
}

export default BackgroundChanger;