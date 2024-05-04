import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { Home } from './pages/Home';
import { Planner } from './pages/Planner';
import { Social } from './pages/Social';
import { Profile } from './pages/Profile';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/planner',
    element: <Planner />
  },
  {
    path: '/social',
    element: <Social />
  },
  {
    path: '/profile',
    element: <Profile />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="w-full bg-slate-100 flex items-center justify-center">
      <main className="bg-white">
        <Toaster 
          toastOptions={{
            className:"font-poppins text-sm"
          }}
        />
        <RouterProvider router={router} />
      </main>
    </div>
  </React.StrictMode>
);
