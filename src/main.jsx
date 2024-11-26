import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from "./components/ui/toaster"

import Home from './Home';
import Profile from './profile';
import AddListing from './add-listing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'/profile',
    element:<Profile />
  },
  {
    path:'/add-listing',
    element:<AddListing />
  }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     <RouterProvider router={router} />
     <Toaster />
    </ClerkProvider>
  </StrictMode>,
)
