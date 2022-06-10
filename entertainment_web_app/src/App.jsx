import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login*" element={<Login />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;