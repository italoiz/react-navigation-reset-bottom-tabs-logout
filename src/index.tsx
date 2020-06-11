import React from 'react';

import Routes from './routes';
import {AuthProvider} from './context/auth';

const App: React.FC = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;
