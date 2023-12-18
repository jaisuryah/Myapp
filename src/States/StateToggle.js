import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn); // Update state: toggle between true and false
  };

  return (
    <div>
      <button onClick={toggle}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
      <p>{isOn ? 'The light is on' : 'The light is off'}</p>
    </div>
  );
}

export default ToggleButton;
