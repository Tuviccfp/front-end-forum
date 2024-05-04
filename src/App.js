import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginComponent from './components/Acess/Login';
import RegisterComponent from './components/Acess/Register';
import CreateAskComponent from './components/CreateAsk';
import Cookies from "js-cookie";
import ErrorPage from "./components/ErrorPage";

function App() {
    const isAuth = Cookies.get("acessToken");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        {isAuth !== undefined && (
          <Route path="/create-ask" element={<CreateAskComponent />} />
        )}
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
