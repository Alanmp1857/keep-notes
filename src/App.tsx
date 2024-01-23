// import './App.css';
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footers/Footer";
import Header from "./components/headers/Header";
import Login from "./components/headers/Login";
import Register from "./components/headers/Register";
import {
  BrowserRouter,
  // Link,
  Route,
  // Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
