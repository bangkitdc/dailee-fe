import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import { Home } from './pages/Home/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="w-full bg-slate-100 flex items-center justify-center">
      <main className="bg-white min-h-screen">
        <RouterProvider router={router} />
      </main>
    </div>
  </React.StrictMode>
);
