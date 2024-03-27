import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
// import Channel from './Components/Channel/Channel';
// import VideoPage from './Components/VideoPage/VideoPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/channel/mastersoft",
//     element: <Channel />,
//   },
//   {
//     path: "/watch",
//     element: <VideoPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
