import "./App.css";
import { Routes, Route } from "react-router-dom";
import Expertlp1 from "./expert/Expertlp1";
import Expertlp2 from "./expert/Expertlp2";
import Clientlp1 from "./client/Clientlp1";
import Clientlp2 from "./client/Clientlp2";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/overview/workwithstartups/lp/expert/lp1"
          element={<Expertlp1 />}
        />
        <Route
          path="/overview/workwithstartups/lp/expert/lp2"
          element={<Expertlp2 />}
        />
        <Route
          path="/overview/workwithstartups/lp/client/lp1"
          element={<Clientlp1 />}
        />
        <Route
          path="/overview/workwithstartups/lp/client/lp2"
          element={<Clientlp2 />}
        />
      </Routes>
    </div>
  );
}

export default App;
