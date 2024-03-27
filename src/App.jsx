import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import('./Components/Home/Home'));
const LazyChannel = lazy(() => import('./Components/Channel/Channel'));
const LazyVideoPage = lazy(() => import('./Components/VideoPage/VideoPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense fallback="Loading..."><LazyHome /></Suspense>} />
        <Route path="/channel/:channel" element={<Suspense fallback="Loading..."><LazyChannel /></Suspense>} />
        <Route path="/watch" element={<Suspense fallback="Loading..."><LazyVideoPage /></Suspense>} />
      </Routes>
    </>
  );
}

export default App;