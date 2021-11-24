import { Routes, Route } from "react-router-dom";

import "./App.css";

import Landing from "./components/landing/landing";
import SignUp from "./components/signup/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
