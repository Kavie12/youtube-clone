import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const LazyHome = lazy(() => import('./App'));
const LazyChannel = lazy(() => import('./Components/Channel/Channel'));
const LazyVideoPage = lazy(() => import('./Components/VideoPage/VideoPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback="Loading..."><LazyHome /></Suspense>,
  },
  {
    path: "/channel/:channel",
    element: <Suspense fallback="Loading..."><LazyChannel /></Suspense>,
  },
  {
    path: "/watch",
    element: <Suspense fallback="Loading..."><LazyVideoPage /></Suspense>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
