import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Channel from "./Components/Channel/Channel";
import VideoPage from "./Components/VideoPage/VideoPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/mastersoft" element={<Channel />} />
        <Route path="/watch" element={<VideoPage />} />
      </Routes>
    </>
  );
}

export default App;