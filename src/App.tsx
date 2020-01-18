
import React from 'react';

import { Layout } from './components';
import { BurgerBuilder } from './containers';

const App: React.FC = () => {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
