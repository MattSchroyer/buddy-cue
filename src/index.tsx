import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import getStore from './redux/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={getStore}>
      <App />
    </ReduxProvider>
  </StrictMode>,
);
