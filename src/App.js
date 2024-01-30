import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <h1>React App</h1>

      <Routes>
        <Route path="/"  element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
