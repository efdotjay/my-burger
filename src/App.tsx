
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <h3>{process.env.REACT_APP_TITLE}</h3>
    </div>
  );
}

export default App;
