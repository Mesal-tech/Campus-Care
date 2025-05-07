import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
  
import StreamVideoProvider from './providers/StreamClientProvider';

import App from './App';

import "@stream-io/video-react-sdk/dist/css/styles.css";
import './index.css';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <StreamVideoProvider>
          <App />
        </StreamVideoProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);